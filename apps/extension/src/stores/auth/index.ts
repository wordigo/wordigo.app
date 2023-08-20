import { create } from "zustand";

interface IAuthStore {
  token: string | null;
  setToken: (token: string) => void;

  isLoggedIn: boolean;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isLoggedIn: false,
  token: null,
  setToken: (token) => set({ token, isLoggedIn: !!token }),
}));
