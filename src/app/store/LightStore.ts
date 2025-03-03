"use client"; // Asegura que el código solo se ejecute en el cliente

import { create } from "zustand";
import { useEffect } from "react";

type ThemeState = {
  theme: string;
  setTheme: (theme: string) => void;
  toggleTheme: () => void;
  
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light", // Valor inicial fijo para evitar errores de hidratación
  setTheme: (theme) => set({ theme }),
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
}));

export function useInitializeTheme() {
  const setTheme = useThemeStore((state) => state.setTheme); 
  
useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme); 
    }
  }, []);
}
