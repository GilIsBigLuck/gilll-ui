import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _emotion_react_jsx_runtime from '@emotion/react/jsx-runtime';
import React from 'react';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: () => void;
}
declare const Button: ({ primary, size, backgroundColor, label, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
declare const Input: ({ label, ...props }: InputProps) => _emotion_react_jsx_runtime.JSX.Element;

export { Button, Input };
export type { ButtonProps, InputProps };
