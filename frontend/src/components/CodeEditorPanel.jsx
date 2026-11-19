import Editor from "@monaco-editor/react"
import { MonacoBinding } from "y-monaco"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Loader2Icon, PlayIcon, UsersIcon } from "lucide-react"
import { LANGUAGE_CONFIG } from "../data/problems.js"
//Configures Monaco to use the bundled build (one instance shared with y-monaco).
import "../lib/monacoSetup"

function CodeEditorPanel({
    selectedLanguage,
    code,
    isRunning,
    onLanguageChange,
    onCodeChange,
    onRunCode,
    //When present the editor is backed by a shared Yjs buffer instead of local state.
    collaboration,
    //Optional accessor for the live buffer content, used when running the code.
    getCode,
}) {
    const isCollaborative = Boolean(collaboration?.ytext)
    const { ytext, awareness } = collaboration ?? {}

    const editorRef = useRef(null)
    const bindingRef = useRef(null)
    const [partnerName, setPartnerName] = useState(null)

    //Show who else is in the shared buffer.
    useEffect(() => {
        if (!awareness) return

        const update = () => {
            const others = [];
            awareness.getStates().forEach((state, clientId) => {
                if (clientId === awareness.clientID) return;
                if (state.user?.name) others.push(state.user.name);
            });
            setPartnerName(others[0] ?? null);
        };

        update();
        awareness.on("change", update);
        return () => awareness.off("change", update);
    }, [awareness]);

    const handleMount = useCallback((editor, monaco) => {
        editorRef.current = editor;

        //Pin the line ending to LF before anything is written to the model.
        //Monaco otherwise picks the platform default, so one participant could
        //end up with CRLF while the other has LF. The offsets then no longer
        //line up and remote edits land in the wrong place.
        editor.getModel()?.setEOL(monaco.editor.EndOfLineSequence.LF);
    }, [])

    //Bind the editor to the shared buffer for the current language.
    //Re-running this when the language changes swaps the binding over to the
    //buffer for the new language.
    useEffect(() => {
        if (!isCollaborative) return

        const editor = editorRef.current
        if (!editor) return

        bindingRef.current?.destroy()
        bindingRef.current = null

        //The previous language may have left a stale cursor behind.
        awareness?.setLocalStateField("selection", null)

        bindingRef.current = new MonacoBinding(
            ytext,
            editor.getModel(),
            new Set([editor]),
            awareness ?? null
        )
    }, [isCollaborative, ytext, awareness])

    useEffect(() => {
        return () => {
            bindingRef.current?.destroy()
            bindingRef.current = null
        }
    }, [])

    const handleRun = useCallback(() => {
        if (getCode) {
            onRunCode(getCode())
            return
        }
        onRunCode(code)
    }, [getCode, onRunCode, code])

    const editorOptions = useMemo(() => ({
        fontSize: 16,
        lineNumbers: "on",
        scrollBeyondLastLine: false,
        automaticLayout: true,
        minimap: { enabled: true },
        //Hold the buffer until the shared document has synced, so nobody types
        //into an empty buffer that the server is about to seed.
        readOnly: isCollaborative ? !collaboration?.isSynced : false,
    }), [isCollaborative, collaboration?.isSynced])

    return (
        <div className="h-full bg-base-300 flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300">
                <div className="flex items-center gap-3">
                    <img src={LANGUAGE_CONFIG[selectedLanguage].icon} alt={LANGUAGE_CONFIG[selectedLanguage].icon} className="size-6"/>
                    <select className="select select-sm" value={selectedLanguage} onChange={onLanguageChange}>
                        {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
                            <option key={key} value={key}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-3">
                    {isCollaborative && (
                        <span
                            className={`badge badge-sm gap-1 ${
                                collaboration?.isSynced
                                    ? "badge-success"
                                    : collaboration?.status === "disconnected" || collaboration?.status === "error"
                                        ? "badge-error"
                                        : "badge-warning"
                            }`}
                            title={
                                collaboration?.isSynced
                                    ? "Both participants share this buffer"
                                    : collaboration?.status === "disconnected" || collaboration?.status === "error"
                                        ? "Not connected to the shared editor, editing is disabled"
                                        : "Connecting to the shared editor..."
                            }
                        >
                            {collaboration?.isSynced ? (
                                <>
                                    <UsersIcon className="size-3" />
                                    {partnerName ? `Shared with ${partnerName}` : "Shared"}
                                </>
                            ) : collaboration?.status === "disconnected" || collaboration?.status === "error" ? (
                                "Offline"
                            ) : (
                                <>
                                    <Loader2Icon className="size-3 animate-spin" />
                                    Connecting
                                </>
                            )}
                        </span>
                    )}

                    <button className="btn btn-primary btn-sm gap-2" disabled={isRunning} onClick={handleRun}>
                        {isRunning ? (
                            <>
                                <Loader2Icon className="size-4 animate-spin"/>
                                Running...
                            </>
                        ) : (
                            <>
                                <PlayIcon className="size-4"/>
                                Run Code
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="flex-1">
                {isCollaborative ? (
                    <Editor
                        height={"100%"}
                        language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
                        defaultValue=""
                        onMount={handleMount}
                        theme="vs-dark"
                        options={editorOptions}
                    />
                ) : (
                    <Editor
                        height={"100%"}
                        language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
                        value={code}
                        onChange={onCodeChange}
                        theme="vs-dark"
                        options={editorOptions}
                    />
                )}
            </div>
        </div>
    )
}

export default CodeEditorPanel
