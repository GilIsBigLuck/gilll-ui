export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: {
    primary: string;
    secondary: string;
  };
  border: string;
  hover: string;
  active: string;
}

export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
}

export const lightTheme: Theme = {
  mode: "light",
  colors: {
    primary: "#1976d2",
    secondary: "#dc004e",
    background: "#ffffff",
    surface: "#f5f5f5",
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
    },
    border: "rgba(0, 0, 0, 0.1)",
    hover: "rgba(0, 0, 0, 0.04)",
    active: "#1976d2",
  },
};

export const darkTheme: Theme = {
  mode: "dark",
  colors: {
    primary: "#90caf9",
    secondary: "#f48fb1",
    background: "#121212",
    surface: "#1e1e1e",
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondary: "rgba(255, 255, 255, 0.6)",
    },
    border: "rgba(255, 255, 255, 0.1)",
    hover: "rgba(255, 255, 255, 0.08)",
    active: "#90caf9",
  },
};
