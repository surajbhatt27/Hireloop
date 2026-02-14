import axiosInstance from "../lib/axios";

export const getHealth = async () => {
    const res = await axiosInstance.get("/health");
    return res.data;
};