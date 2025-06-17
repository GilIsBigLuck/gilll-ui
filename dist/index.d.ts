import React from 'react';
import * as _emotion_react_jsx_runtime from '@emotion/react/jsx-runtime';
import * as react_jsx_runtime from 'react/jsx-runtime';

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

type ContainerMaxWidth = "xs" | "sm" | "md" | "lg" | "xl";
interface ContainerProps {
    maxWidth?: ContainerMaxWidth;
    padding?: string;
    margin?: string;
    children?: React.ReactNode;
    className?: string;
}
declare const Container: React.FC<ContainerProps>;

interface BoxProps {
    display?: "block" | "flex" | "inline" | "inline-block" | "grid" | "none";
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    gap?: string;
    padding?: string;
    margin?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string;
    border?: string;
    boxShadow?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gridColumn?: string;
    gridRow?: string;
    loading?: boolean;
    loadingSpinnerColor?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
declare const Box: React.FC<BoxProps>;

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "subtitle3" | "body1" | "body2" | "body3";
interface TypographyProps {
    variant?: TypographyVariant;
    color?: string;
    align?: "left" | "center" | "right";
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    marginBottom?: string;
}
declare const Typography: React.FC<TypographyProps>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
declare const Input: ({ label, ...props }: InputProps) => _emotion_react_jsx_runtime.JSX.Element;

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}
declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Box, Button, Checkbox, Container, DarkModeToggle, GilllThemeProvider, Input, Navigation, Radio, RadioGroup, Typography, useTheme };
export type { BoxProps, ButtonProps, CheckboxProps, ContainerMaxWidth, ContainerProps, InputProps, NavigationItem, NavigationPosition, NavigationProps, RadioGroupProps, RadioProps, Theme, TypographyProps, TypographyVariant };
