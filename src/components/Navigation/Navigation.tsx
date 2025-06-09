import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

// Navigation 위치
export type NavigationPosition = "top" | "bottom" | "left" | "right";

// Navigation Item Type
export interface NavigationItem {
  id: string;
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

// Navigation Props Type
export interface NavigationProps {
  position?: NavigationPosition;
  items: NavigationItem[];
  width?: string;
  height?: string;
  backgroundColor?: string;
  activeColor?: string;
  hoverColor?: string;
  className?: string;
}

// Navigation Position별 css값
const getPositionStyles = (position: NavigationPosition) => {
  switch (position) {
    case "top":
      return `top: 35px; left: 0; right: 0; flex-direction: row;`;
    case "bottom":
      return `bottom: 35px; left: 0; right: 0; flex-direction: row;`;
    case "left":
      return `top: 0; left: 35px; bottom: 0; flex-direction: column;`;
    case "right":
      return `top: 0; right: 35px; bottom: 0; flex-direction: column;`;
  }
};

const NavigationDot = styled.div<{
  top: number;
  left: number;
  activeColor?: string;
  isActive: boolean;
}>`
  position: absolute;
  width: 62px;
  height: 62px;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  transform: translate(-50%, -50%)
    scale(${({ isActive }) => (isActive ? 1 : 0.8)});
  border-radius: 50%;
  background-color: ${({ activeColor }) =>
    activeColor || "var(--gilll-primary)"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  z-index: 0;
`;

const NavigationItemButton = styled.button<{
  isActive?: boolean;
  activeColor?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  padding: 12px 16px;
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? "var(--gilll-text)" : "inherit")};
  transition: all 0.3s ease;
  z-index: 1;
  overflow: hidden;

  .label {
    font-size: 10px;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: translateY(${({ isActive }) => (isActive ? "0" : "4px")});
    opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({ isActive, activeColor }) =>
      isActive ? "var(--gilll-text)" : "var(--gilll-text-secondary)"};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(${({ isActive }) => (isActive ? 1.1 : 1)});
  }

  &:hover {
    svg {
      color: ${({ isActive, activeColor }) =>
        isActive ? "var(--gilll-text)" : activeColor || "var(--gilll-primary)"};
    }
  }
`;

const NavigationContainer = styled.div<Omit<NavigationProps, "items">>`
  position: fixed;
  display: flex;
  gap: 32px;
  margin: 0 auto;
  border-radius: 50px;
  box-shadow: 0 0 20px var(--gilll-shadow);
  padding: 0 24px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "var(--gilll-primary)"};
  width: ${({ position, width }) =>
    position === "left" || position === "right"
      ? width || "240px"
      : "fit-content"};
  height: ${({ position, height }) =>
    position === "top" || position === "bottom" ? height || "72px" : "100%"};
  ${({ position = "top" }) => getPositionStyles(position)}
  overflow: hidden;
`;

export const Navigation: React.FC<NavigationProps> = ({
  position = "top",
  items,
  backgroundColor,
  activeColor,
  className,
  width,
  height,
}) => {
  const [activeIndex, setActiveIndex] = useState(
    items.findIndex((item) => item.isActive) || 0
  );
  const [dotPos, setDotPos] = useState({ top: 0, left: 0 });
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement?.getBoundingClientRect();
      setDotPos({
        top: rect.top - (parentRect?.top || 0) + rect.height / 2,
        left: rect.left - (parentRect?.left || 0) + rect.width / 2,
      });
    }
  }, [activeIndex, items]);

  const handleItemClick = (index: number, onClick?: () => void) => {
    setActiveIndex(index);
    onClick?.();
  };

  return (
    <NavigationContainer
      position={position}
      backgroundColor={backgroundColor}
      className={className}
      width={width}
      height={height}
    >
      {items.map((item, index) => (
        <NavigationItemButton
          key={item.id}
          ref={(el) => {
            if (el) itemRefs.current[index] = el;
          }}
          onClick={() => handleItemClick(index, item.onClick)}
          isActive={index === activeIndex}
          activeColor={activeColor}
        >
          {item.icon}
          {item.label && <span className="label">{item.label}</span>}
        </NavigationItemButton>
      ))}
      <NavigationDot
        top={dotPos.top}
        left={dotPos.left}
        activeColor={activeColor}
        isActive={true}
        className="navigation-dot"
      />
    </NavigationContainer>
  );
};

export default Navigation;
