import React from "react";
import styled from "@emotion/styled";

export interface RadioProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return `
        width: 16px;
        height: 16px;
      `;
    case "large":
      return `
        width: 24px;
        height: 24px;
      `;
    default: // medium
      return `
        width: 20px;
        height: 20px;
      `;
  }
};

const RadioContainer = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  user-select: none;
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const RadioBox = styled.div<{
  checked?: boolean;
  size?: string;
  disabled?: boolean;
}>`
  ${({ size = "medium" }) => getSizeStyles(size)}
  position: relative;
  border: 2px solid var(--gilll-border);
  border-radius: 50%;
  background-color: var(--gilll-background);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ checked }) =>
    checked &&
    `
    border-color: var(--gilll-primary);
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
    content: "";
    width: ${({ size = "medium" }) => {
      switch (size) {
        case "small":
          return "6px";
        case "large":
          return "10px";
        default:
          return "8px";
      }
    }};
    height: ${({ size = "medium" }) => {
      switch (size) {
        case "small":
          return "6px";
        case "large":
          return "10px";
        default:
          return "8px";
      }
    }};
    border-radius: 50%;
    background-color: var(--gilll-primary);
    opacity: ${({ checked }) => (checked ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;

const RadioLabel = styled.span<{ size?: string }>`
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

export const Radio: React.FC<RadioProps> = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  value,
  size = "medium",
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <RadioContainer disabled={disabled} className={className}>
      <RadioInput
        type="radio"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
      />
      <RadioBox checked={checked} size={size} disabled={disabled} />
      {label && <RadioLabel size={size}>{label}</RadioLabel>}
    </RadioContainer>
  );
};

// RadioGroup 컴포넌트
export interface RadioGroupProps {
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onChange,
  name,
  children,
  disabled = false,
  className,
}) => {
  const handleChange = (radioValue: string) => {
    if (!disabled && onChange) {
      onChange(radioValue);
    }
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Radio) {
      return React.cloneElement(child as React.ReactElement<RadioProps>, {
        name,
        checked: (child.props as RadioProps).value === value,
        onChange: (checked: boolean) => {
          if (checked) {
            handleChange((child.props as RadioProps).value || "");
          }
        },
        disabled: disabled || (child.props as RadioProps).disabled,
      });
    }
    return child;
  });

  return (
    <RadioGroupContainer className={className}>
      {childrenWithProps}
    </RadioGroupContainer>
  );
};

export default Radio;
