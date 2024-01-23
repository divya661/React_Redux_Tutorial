import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const axiosFirebaseInstance = axios.create({
  baseURL: "https://e-store-e0181-default-rtdb.firebaseio.com/",
});

export default axiosInstance;