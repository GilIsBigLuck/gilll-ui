import React from "react";
import styled from "@emotion/styled";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

const sizeMap = {
  small: { fontSize: "12px", padding: "8px 16px" },
  medium: { fontSize: "14px", padding: "10px 20px" },
  large: { fontSize: "16px", padding: "12px 24px" },
};

const StyledButton = styled.button<{
  primary: boolean;
  size: "small" | "medium" | "large";
  backgroundColor?: string;
}>(({ primary, size, backgroundColor }) => ({
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: 600,
  transition: "0.2s",
  ...(primary
    ? { backgroundColor: backgroundColor || "#1ea7fd", color: "#fff" }
    : {
        backgroundColor: backgroundColor || "#fff",
        color: "#333",
        border: "1px solid #ddd",
      }),
  ...sizeMap[size],
  "&:focus": {
    outline: "2px solid black",
    outlineOffset: "2px",
  },
}));

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      primary={primary}
      size={size}
      backgroundColor={backgroundColor}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
