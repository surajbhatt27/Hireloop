import axios from 'axios';

const JDOODLE_API_URL = 'https://api.jdoodle.com/v1/execute';

export async function executeWithJDoodle(language, code) {
    // Map your languages to JDoodle format
    const languageMap = {
        javascript: { language: 'nodejs', version: '4' },
        python: { language: 'python3', version: '3' },
        java: { language: 'java', version: '4' }
    };

    const config = languageMap[language];
    if (!config) {
        return {
            success: false,
            error: `Unsupported language: ${language}`
        };
    }

    try {
        const response = await axios.post(JDOODLE_API_URL, {
            clientId: process.env.JDOODLE_CLIENT_ID,
            clientSecret: process.env.JDOODLE_CLIENT_SECRET,
            script: code,
            language: config.language,
            versionIndex: config.version,
            stdin: "" // Empty stdin by default
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
        console.error("JDoodle error:", error);
        return {
            success: false,
            error: "Code execution failed. Please try again."
        };
    }
}