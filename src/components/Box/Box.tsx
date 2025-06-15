import React from "react";
import styled from "@emotion/styled";

export interface BoxProps {
  display?: "block" | "flex" | "inline" | "inline-block" | "grid" | "none";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
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
  // Grid properties
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridColumn?: string;
  gridRow?: string;
  // Loading state
  loading?: boolean;
  loadingSpinnerColor?: string;
  // Disabled state
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Loading Spinner Component
const Spinner = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  border: 3px solid transparent;
  border-top: 3px solid ${({ color }) => color};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StyledBox = styled.div<BoxProps>`
  display: ${({ display = "block" }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-right: ${({ marginRight }) => marginRight};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor = "white" }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border};
  box-shadow: ${({
    boxShadow = "var(--gilll-shadow, 0 2px 8px rgba(0, 0, 0, 0.1))",
  }) => boxShadow};
  // Grid properties
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  // Loading state
  position: ${({ loading }) => (loading ? "relative" : "static")};
  // Disabled state
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled, onClick }) =>
    disabled ? "not-allowed" : onClick ? "pointer" : "default"};
  user-select: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export const Box: React.FC<BoxProps> = ({
  children,
  loading = false,
  loadingSpinnerColor = "#1976d2",
  disabled = false,
  onClick,
  ...props
}) => {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <StyledBox
      loading={loading}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {loading ? <Spinner color={loadingSpinnerColor} /> : children}
    </StyledBox>
  );
};

export default Box;
