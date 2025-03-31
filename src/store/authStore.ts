import { create } from "zustand";

interface AuthState {
  user: { name: string; id: string } | null;
  login: (userData: { name: string; id: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
}));
