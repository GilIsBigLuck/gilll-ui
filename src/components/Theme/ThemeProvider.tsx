import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";

// Theme 타입 정의
export interface Theme {
  primary: string;
  primaryHover: string;
  primaryLight: string;
  background: string;
  text: string;
  textSecondary: string;
  border: string;
  shadow: string;
}

// 색상을 RGBA로 변환하는 함수
const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// 기본 라이트 테마
const defaultLightTheme: Theme = {
  primary: "#1976d2",
  primaryHover: "#1565c0",
  primaryLight: "#42a5f5",
  background: "#ffffff",
  text: "#333333",
  textSecondary: "#666666",
  border: "#e0e0e0",
  shadow: "0 0 20px 0 rgba(25, 118, 210, 0.1)", // primary color의 10% opacity
};

// 기본 다크 테마
const defaultDarkTheme: Theme = {
  primary: "#64b5f6",
  primaryHover: "#42a5f5",
  primaryLight: "#90caf9",
  background: "#1a1a1a",
  text: "#ffffff",
  textSecondary: "#cccccc",
  border: "#333333",
  shadow: "0 0 20px 0 rgba(100, 181, 246, 0.1)", // primary color의 10% opacity
};

// Theme Context
interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleDarkMode: () => void;
  setTheme: (theme: Partial<Theme>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// CSS 변수 생성 함수
const generateCSSVariables = (theme: Theme) => `
  :root {
    --gilll-primary: ${theme.primary};
    --gilll-primary-hover: ${theme.primaryHover};
    --gilll-primary-light: ${theme.primaryLight};
    --gilll-background: ${theme.background};
    --gilll-text: ${theme.text};
    --gilll-text-secondary: ${theme.textSecondary};
    --gilll-border: ${theme.border};
    --gilll-shadow: ${theme.shadow};
  }
`;

// Global Styles 컴포넌트
const GlobalStyles = styled.div<{ theme: Theme }>`
  ${({ theme }) => generateCSSVariables(theme)}
`;

// ThemeProvider Props
interface GilllThemeProviderProps {
  children: React.ReactNode;
  theme?: Partial<Theme>;
  defaultDark?: boolean;
  enableSystemDark?: boolean;
}

export const GilllThemeProvider: React.FC<GilllThemeProviderProps> = ({
  children,
  theme: customTheme = {},
  defaultDark = false,
  enableSystemDark = true,
}) => {
  const [isDark, setIsDark] = useState(defaultDark);
  const [systemDark, setSystemDark] = useState(false);

  // 시스템 다크모드 감지
  useEffect(() => {
    if (!enableSystemDark) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [enableSystemDark]);

  // 실제 다크모드 상태 (시스템 + 사용자 설정)
  const actualIsDark = enableSystemDark ? systemDark || isDark : isDark;

  // 테마 생성 (기본 + 커스텀 + 다크모드)
  const baseTheme = actualIsDark ? defaultDarkTheme : defaultLightTheme;

  // 커스텀 테마가 primary color를 포함하면 shadow도 자동 계산
  const customThemeWithShadow = customTheme.primary
    ? {
        ...customTheme,
        shadow:
          customTheme.shadow ||
          `0 0 20px 0 ${hexToRgba(customTheme.primary, 0.1)}`,
      }
    : customTheme;

  const theme: Theme = {
    ...baseTheme,
    ...customThemeWithShadow,
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const setTheme = (newTheme: Partial<Theme>) => {
    Object.assign(theme, newTheme);
  };

  const contextValue: ThemeContextType = {
    theme,
    isDark: actualIsDark,
    toggleDarkMode,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <GlobalStyles theme={theme} />
      {children}
    </ThemeContext.Provider>
  );
};

// Theme Hook
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a GilllThemeProvider");
  }
  return context;
};

// 다크모드 토글 버튼 (선택사항)
export const DarkModeToggle: React.FC = () => {
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "10px",
        borderRadius: "50%",
        border: "none",
        background: "var(--gilll-primary)",
        color: "var(--gilll-background)",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
};
