import axios from "axios";
import { jwtVerify } from "jose";
import toast from "react-hot-toast";
// Config
import { localStorageKeys } from "../config/localStorageKeys";
// Utils
import { sleep } from "../utils/sleep";

export const apiUrl = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// BEFORE REQUEST
api.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if (accessToken) {
      try {
        // CHECK JWT TOKEN
        const jwtSecretKey =  import.meta.env.VITE_SECRET_KEY

        const secret = new TextEncoder().encode(jwtSecretKey);
        await jwtVerify(accessToken, secret);

        config.headers.Authorization = `Bearer ${accessToken}`;
      } catch (err) {
        toast.error("Senssão inválida!");

        localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
        window.location.href = "/login";

        return Promise.reject(err);
      }
    }

    await sleep(500);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// AFTER REQUEST
api.interceptors.response.use(undefined, async (err) => {
  const msgError = err.response.data?.message;

  const customError = msgError;

  if (err.response.status === 401) {
    toast.error("Sessão expirada!");

    window.localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    window.location.href = "/login"
  }

  return Promise.reject(customError);
});
