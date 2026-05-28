import { executeWithJDoodle } from '../lib/jdoodle.js';

export async function executeCode(req, res) {
    try {
        const { language, code } = req.body;

        if (!language || !code) {
            return res.status(400).json({
                success: false,
                error: "Language and code are required"
            });
        }

        const result = await executeWithJDoodle(language, code);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error in executeCode controller:", error);
        res.status(500).json({
            success: false,
            error: "Internal server error"
        });
    }
}