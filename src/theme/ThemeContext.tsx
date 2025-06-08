import React, { createContext, useContext, useEffect, useState } from "react";
import { Theme, ThemeMode, lightTheme, darkTheme } from "./theme";

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Singleton instance
let themeInstance: ThemeContextType | null = null;

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Check localStorage first
    const savedMode = localStorage.getItem("theme-mode") as ThemeMode;
    // Then check system preference
    if (!savedMode) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return savedMode;
  });

  const theme = mode === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem("theme-mode", mode);
    // Update document class for global styles
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  // Create singleton instance
  if (!themeInstance) {
    themeInstance = {
      theme,
      mode,
      toggleTheme,
      setTheme,
    };
  } else {
    // Update singleton instance when theme changes
    themeInstance.theme = theme;
    themeInstance.mode = mode;
    themeInstance.toggleTheme = toggleTheme;
    themeInstance.setTheme = setTheme;
  }

  return (
    <ThemeContext.Provider value={themeInstance}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Export singleton instance getter
export const getThemeInstance = (): ThemeContextType => {
  if (!themeInstance) {
    throw new Error(
      "ThemeProvider must be initialized before using getThemeInstance"
    );
  }
  return themeInstance;
};
