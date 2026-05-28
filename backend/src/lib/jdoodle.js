import axios from 'axios';

const JDOODLE_API_URL = 'https://api.jdoodle.com/v1/execute';

// language mapping for JDoodle
const LANGUAGE_MAP = {
    javascript: { language: 'nodejs', version: '4', name: 'JavaScript', icon: '/javascript.png', monacoLang: 'javascript' },
    python: { language: 'python3', version: '3', name: 'Python', icon: '/python.png', monacoLang: 'python' },
    java: { language: 'java', version: '4', name: 'Java', icon: '/java.png', monacoLang: 'java' },
    typescript: { language: 'typescript', version: '1', name: 'TypeScript', icon: '/typescript.png', monacoLang: 'typescript' },
    cpp: { language: 'cpp17', version: '1', name: 'C++', icon: '/cpp.png', monacoLang: 'cpp' },
    c: { language: 'c', version: '1', name: 'C', icon: '/c.png', monacoLang: 'c' },
    csharp: { language: 'csharp', version: '1', name: 'C#', icon: '/csharp.png', monacoLang: 'csharp' },
    go: { language: 'go', version: '1', name: 'Go', icon: '/go.png', monacoLang: 'go' },
    rust: { language: 'rust', version: '1', name: 'Rust', icon: '/rust.png', monacoLang: 'rust' },
    ruby: { language: 'ruby', version: '1', name: 'Ruby', icon: '/ruby.png', monacoLang: 'ruby' },
    php: { language: 'php', version: '1', name: 'PHP', icon: '/php.png', monacoLang: 'php' },
    swift: { language: 'swift', version: '1', name: 'Swift', icon: '/swift.png', monacoLang: 'swift' },
    kotlin: { language: 'kotlin', version: '1', name: 'Kotlin', icon: '/kotlin.png', monacoLang: 'kotlin' },
    scala: { language: 'scala', version: '1', name: 'Scala', icon: '/scala.png', monacoLang: 'scala' },
    perl: { language: 'perl', version: '1', name: 'Perl', icon: '/perl.png', monacoLang: 'perl' },
    r: { language: 'r', version: '1', name: 'R', icon: '/r.png', monacoLang: 'r' }
};

export async function executeWithJDoodle(language, code) {
    const config = LANGUAGE_MAP[language];
    
    if (!config) {
        return {
            success: false,
            error: `Unsupported language: ${language}`
        };
    }

    if (!process.env.JDOODLE_CLIENT_ID || !process.env.JDOODLE_CLIENT_SECRET) {
        console.error("JDoodle credentials missing!");
        return {
            success: false,
            error: "Code execution service not configured."
        };
    }

    try {
        const payload = {
            clientId: process.env.JDOODLE_CLIENT_ID,
            clientSecret: process.env.JDOODLE_CLIENT_SECRET,
            script: code,
            language: config.language,
            versionIndex: config.version,
            stdin: ""
        };

        const response = await axios.post(JDOODLE_API_URL, payload, {
            headers: { 'Content-Type': 'application/json' },
            timeout: 10000
        });

        const data = response.data;
        
        if (data.error) {
            return {
                success: false,
                error: data.error
            };
        }

        return {
            success: true,
            output: data.output || "No output"
        };
    } catch (error) {
        console.error("JDoodle execution error:", error.message);
        return {
            success: false,
            error: "Code execution failed. Please try again."
        };
    }
}

// language map for frontend use
export function getSupportedLanguages() {
    return Object.entries(LANGUAGE_MAP).map(([key, value]) => ({
        id: key,
        name: value.name,
        monacoLang: value.monacoLang,
        icon: value.icon
    }));
}