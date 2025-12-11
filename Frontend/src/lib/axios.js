
// import axios from "axios";

// export const axiosInstance = axios.create({

//     baseURL : import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "https://textify-cwtk.onrender.com/api/",
//     withCredentials : true,

// })



import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});


