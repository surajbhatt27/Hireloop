import { useEffect, useRef, useState } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { useAuth } from "@clerk/clerk-react";

//In production the backend lives on another host, so VITE_WS_URL points straight at it.
//In development Vite proxies /ws through to the backend.
const resolveWsUrl = () => {
    const configured = import.meta.env.VITE_WS_URL;
    if (configured) return configured.replace(/\/$/, "");

    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    return `${protocol}//${window.location.host}/ws`;
};

//Colours used to tell the participants apart.
const USER_COLORS = ["#22d3ee", "#f472b6", "#a3e635", "#fbbf24", "#a78bfa"];

const colorFor = (id) => {
    let hash = 0;
    for (let i = 0; i < id.length; i++) {
        hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
    }
    return USER_COLORS[hash % USER_COLORS.length];
};

/**
 * Creates the shared Yjs document and connects it to the collaboration server.
 * The document lives for as long as the session page is open, so switching
 * languages just switches which shared text buffer is bound.
 */
export default function useCollaboration({ sessionId, enabled = true }) {
    const { getToken, isSignedIn, user } = useAuth();
    const [ydoc] = useState(() => new Y.Doc());
    const [provider, setProvider] = useState(null);
    const [status, setStatus] = useState("disconnected");
    const [isSynced, setIsSynced] = useState(false);
    const providerRef = useRef(null);
    const getTokenRef = useRef(getToken);
    const userRef = useRef(user);

    useEffect(() => {
        getTokenRef.current = getToken;
    }, [getToken]);

    useEffect(() => {
        userRef.current = user;
    }, [user]);

    useEffect(() => {
        if (!enabled || !sessionId || !isSignedIn) return;

        let cancelled = false;
        let current = null;

        const connect = async () => {
            try {
                const token = await getTokenRef.current();
                if (!token || cancelled) return;

                const instance = new WebsocketProvider(resolveWsUrl(), sessionId, ydoc, {
                    params: { token },
                });

                if (cancelled) {
                    instance.destroy();
                    return;
                }

                current = instance;
                providerRef.current = instance;
                setProvider(instance);

                //Tell the other participant who we are.
                const currentUser = userRef.current;
                if (currentUser) {
                    instance.awareness.setLocalStateField("user", {
                        name: currentUser.firstName || currentUser.username || "Partner",
                        color: colorFor(currentUser.id),
                    });
                }

                instance.on("status", ({ status: next }) => {
                    if (next === "connected") setIsSynced(false);
                    setStatus(next);
                });

                instance.on("sync", (synced) => {
                    setIsSynced(synced);
                });
            } catch (error) {
                console.error("Failed to connect to the collaboration server:", error);
                setStatus("error");
            }
        };

        connect();

        return () => {
            cancelled = true;
            setIsSynced(false);
            setStatus("disconnected");
            setProvider(null);
            if (current) {
                current.destroy();
            }
            providerRef.current = null;
        };
    }, [sessionId, enabled, isSignedIn, ydoc]);

    useEffect(() => {
        return () => {
            ydoc.destroy();
        };
    }, [ydoc]);

    return {
        ydoc,
        provider,
        status,
        isSynced,
        awareness: provider?.awareness ?? null,
        isConnected: status === "connected" || status === "synced",
    };
}
