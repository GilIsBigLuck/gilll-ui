import React from "react";
import styled from "@emotion/styled";

export type ContainerMaxWidth = "xs" | "sm" | "md" | "lg" | "xl";

export interface ContainerProps {
  maxWidth?: ContainerMaxWidth;
  padding?: string;
  margin?: string;
  children?: React.ReactNode;
  className?: string;
}

const getMaxWidth = (maxWidth: ContainerMaxWidth) => {
  switch (maxWidth) {
    case "xs":
      return "444px";
    case "sm":
      return "600px";
    case "md":
      return "900px";
    case "lg":
      return "1200px";
    case "xl":
      return "1536px";
    default:
      return "1200px";
  }
};

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ maxWidth = "lg" }) => getMaxWidth(maxWidth)};
  margin-left: auto;
  margin-right: auto;
  padding: ${({ padding = "0 16px" }) => padding};
  margin: ${({ margin }) => margin};
  box-sizing: border-box;
`;

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
