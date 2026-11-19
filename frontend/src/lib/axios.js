import axios from "axios"

const axiosInstance = axios.create({
    //Defaults to the relative /api path so the vercel.json rewrite handles it.
    //Set VITE_API_URL to point somewhere else (e.g. http://localhost:3000/api).
    baseURL: import.meta.env.VITE_API_URL || "/api",
    withCredentials: true //browser will send cookies to server automatically (on every single req)
})

export default axiosInstance