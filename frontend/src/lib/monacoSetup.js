import { loader } from '@monaco-editor/react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

//Only the languages PairUp actually offers.
//Importing the full monaco-editor package pulls in ~80 languages and
//blows up the build, so each contribution is listed explicitly.
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js' // registers both cpp and c
import 'monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/go/go.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/java/java.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/perl/perl.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/php/php.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/r/r.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/rust/rust.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/scala/scala.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/swift/swift.contribution.js'
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js'

//Language service for javascript/typescript (autocomplete, diagnostics).
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution.js'

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

//Monaco runs the language services in web workers.
//Without this they fall back to the main thread and the editor stutters.
self.MonacoEnvironment = {
    getWorker(_workerId, label) {
        if (label === 'typescript' || label === 'javascript') return new tsWorker()
        return new editorWorker()
    }
}

//Use the bundled Monaco instead of the default CDN download.
//This keeps a single Monaco instance in the app, which y-monaco relies on,
//and means the editor still works without a CDN round trip.
loader.config({ monaco })

export default monaco
