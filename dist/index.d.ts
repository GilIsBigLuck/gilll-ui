import React from 'react';

interface Theme {
    primary: string;
    primaryHover: string;
    primaryLight: string;
    background: string;
    text: string;
    textSecondary: string;
    border: string;
    shadow: string;
}
interface ThemeContextType {
    theme: Theme;
    isDark: boolean;
    toggleDarkMode: () => void;
    setTheme: (theme: Partial<Theme>) => void;
}
interface GilllThemeProviderProps {
    children: React.ReactNode;
    theme?: Partial<Theme>;
    defaultDark?: boolean;
    enableSystemDark?: boolean;
}
declare const GilllThemeProvider: React.FC<GilllThemeProviderProps>;
declare const useTheme: () => ThemeContextType;
declare const DarkModeToggle: React.FC;

type NavigationPosition = "top" | "bottom" | "left" | "right";
interface NavigationItem {
    id: string;
    label?: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean;
}
interface NavigationProps {
    position?: NavigationPosition;
    items: NavigationItem[];
    width?: string;
    height?: string;
    backgroundColor?: string;
    activeColor?: string;
    hoverColor?: string;
    className?: string;
}
declare const Navigation: React.FC<NavigationProps>;

interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    size?: "small" | "medium" | "large";
    className?: string;
}
declare const Checkbox: React.FC<CheckboxProps>;

interface RadioProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    name?: string;
    value?: string;
    size?: "small" | "medium" | "large";
    className?: string;
}
declare const Radio: React.FC<RadioProps>;
interface RadioGroupProps {
    value?: string;
    onChange?: (value: string) => void;
    name: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}
declare const RadioGroup: React.FC<RadioGroupProps>;

export { Checkbox, DarkModeToggle, GilllThemeProvider, Navigation, Radio, RadioGroup, useTheme };
export type { CheckboxProps, NavigationItem, NavigationPosition, NavigationProps, RadioGroupProps, RadioProps, Theme };
