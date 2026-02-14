import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true //browser will send cookies to server automatically (on every single req)
})
console.log("VITE_API_URL =", import.meta.env.VITE_API_URL)

export default axiosInstance