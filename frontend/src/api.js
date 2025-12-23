import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const getHealth = async () => {
    const res = await api.get("/health");
    return res.data;
};
