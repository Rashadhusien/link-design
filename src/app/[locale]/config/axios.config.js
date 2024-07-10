import axios from "axios";
// http://localhost:1337/api
const axiosInstance = axios.create({
  baseURL: "https://passionate-pleasure-95df767cc9.strapiapp.com/api",
  timeout: 1000,
});

export default axiosInstance;
