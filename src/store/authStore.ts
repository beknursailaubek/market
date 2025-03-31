import { create } from "zustand";
import { fetchUserData } from "@/features/auth/api/authApi";

interface AuthState {
  user: { name: string; id: string } | null;
  login: (userData: { name: string; id: string }) => void;
  logout: () => void;
  fetchUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (userData) => set({ user: userData }),
  logout: () => set({ user: null }),
  fetchUser: async () => {
    try {
      const userData = await fetchUserData();
      set({ user: userData });
    } catch (error) {
      console.error(error);
      set({ user: null });
    }
  },
}));
