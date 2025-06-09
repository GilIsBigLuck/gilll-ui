import React from "react";
import styled from "@emotion/styled";

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return `
        width: 16px;
        height: 16px;
        font-size: 12px;
      `;
    case "large":
      return `
        width: 24px;
        height: 24px;
        font-size: 18px;
      `;
    default: // medium
      return `
        width: 20px;
        height: 20px;
        font-size: 14px;
      `;
  }
};

const CheckboxContainer = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  user-select: none;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const CheckboxBox = styled.div<{
  checked?: boolean;
  size?: string;
  disabled?: boolean;
}>`
  ${({ size = "medium" }) => getSizeStyles(size)}
  position: relative;
  border: 2px solid var(--gilll-border);
  border-radius: 4px;
  background-color: var(--gilll-background);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;

  ${({ checked }) =>
    checked &&
    `
    background-color: var(--gilll-primary);
    border-color: var(--gilll-primary);
    color: var(--gilll-background);
  `}

  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
      border-color: var(--gilll-primary);
      transform: scale(1.05);
    }
  `}

  &::after {
    content: "✓";
    font-weight: bold;
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;

const CheckboxLabel = styled.span<{ size?: string }>`
  font-size: ${({ size = "medium" }) => {
    switch (size) {
      case "small":
        return "12px";
      case "large":
        return "16px";
      default:
        return "14px";
    }
  }};
  color: var(--gilll-text);
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  size = "medium",
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <CheckboxContainer disabled={disabled} className={className}>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <CheckboxBox checked={checked} size={size} disabled={disabled} />
      {label && <CheckboxLabel size={size}>{label}</CheckboxLabel>}
    </CheckboxContainer>
  );
};

export default Checkbox;
