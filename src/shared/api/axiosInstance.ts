import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Для работы с куками
});

// Перехватчик для обработки ошибок
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Редирект на логин при 401 ошибке
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);
