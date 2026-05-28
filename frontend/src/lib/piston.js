import axiosInstance from './axios';

export async function executeCode(language, code) {
    try {
        const response = await axiosInstance.post('/code/execute', {
            language,
            code
        });
        
        return response.data;
    } catch (error) {
        console.error("Execution error:", error);
        return {
            success: false,
            error: error.response?.data?.error || "Failed to execute code"
        };
    }
}