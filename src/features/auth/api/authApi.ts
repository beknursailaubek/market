// src/features/auth/api/authApi.ts
import { useAuthStore } from "@/store/authStore";

export const login = async (email: string, password: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Ошибка авторизации");
  }
  const res = await response.json();
  useAuthStore.getState().login({ name: res.user.name, id: res.user.id }); // Update Zustand store
  return res;
};

export const register = async (email: string, password: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Ошибка регистрации");
  }
  const res = await response.json();
  useAuthStore.getState().login({ name: res.user.name, id: res.user.id }); // Update Zustand store
  return res;
};

export const logout = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Ошибка выхода");
  }
  document.cookie = "";
  useAuthStore.getState().logout(); // Clear Zustand store
};
