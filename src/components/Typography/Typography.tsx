import React from "react";
import styled from "@emotion/styled";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "subtitle3"
  | "body1"
  | "body2"
  | "body3";

export interface TypographyProps {
  variant?: TypographyVariant;
  color?: string;
  align?: "left" | "center" | "right";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  marginBottom?: string;
}

const getTypographyStyles = (variant: TypographyVariant) => {
  switch (variant) {
    case "h1":
      return `
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1rem;
      `;
    case "h2":
      return `
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 0.875rem;
      `;
    case "h3":
      return `
        font-size: 1.75rem;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 0.75rem;
      `;
    case "h4":
      return `
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 0.75rem;
      `;
    case "h5":
      return `
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 0.625rem;
      `;
    case "h6":
      return `
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 0.5rem;
      `;
    case "subtitle1":
      return `
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.5;
        margin-bottom: 0.5rem;
      `;
    case "subtitle2":
      return `
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5;
        margin-bottom: 0.5rem;
      `;
    case "subtitle3":
      return `
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.5;
        margin-bottom: 0.375rem;
      `;
    case "body1":
      return `
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 0.5rem;
      `;
    case "body2":
      return `
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 0.375rem;
      `;
    case "body3":
      return `
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.5;
        margin-bottom: 0.25rem;
      `;
    default:
      return `
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
      `;
  }
};

const getElement = (variant: TypographyVariant) => {
  if (variant.startsWith("h")) {
    return variant;
  }
  if (variant.startsWith("subtitle")) {
    return "h6";
  }
  return "p";
};

const StyledTypography = styled.div<Omit<TypographyProps, "children">>`
  margin: 0;
  padding: 0;
  color: ${({ color }) => color || "inherit"};
  text-align: ${({ align }) => align || "left"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0"};

  ${({ variant = "body1" }) => getTypographyStyles(variant)}
`;

export const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  children,
  ...props
}) => {
  const Component = getElement(variant) as keyof JSX.IntrinsicElements;

  return (
    <StyledTypography as={Component} variant={variant} {...props}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
