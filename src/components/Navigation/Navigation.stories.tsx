import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Navigation } from "./Navigation";
import { GilllThemeProvider } from "../Theme/ThemeProvider";

// 아이콘 컴포넌트들 (간단한 예시)
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const ProfileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
  </svg>
);

const NotificationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
  </svg>
);

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
      description: "The position of the navigation bar",
    },
    backgroundColor: {
      control: "color",
      description: "The background color of the navigation bar",
    },
    activeColor: {
      control: "color",
      description: "The color of the active navigation item",
    },
    hoverColor: {
      control: "color",
      description: "The background color of navigation items on hover",
    },
    width: {
      control: "text",
      description: "The width of the navigation bar (for left/right position)",
    },
    height: {
      control: "text",
      description: "The height of the navigation bar (for top/bottom position)",
    },
  },
  decorators: [
    (Story) => (
      <GilllThemeProvider>
        <div style={{ height: "100vh", position: "relative" }}>
          <Story />
        </div>
      </GilllThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    id: "home",
    label: "홈",
    icon: <HomeIcon />,
    isActive: true,
  },
  {
    id: "profile",
    label: "프로필",
    icon: <ProfileIcon />,
  },
  {
    id: "settings",
    label: "설정",
    icon: <SettingsIcon />,
  },
  {
    id: "notifications",
    label: "알림",
    icon: <NotificationIcon />,
  },
];

// 기본 네비게이션 (상단)
export const Default: Story = {
  args: {
    position: "top",
    items: defaultItems,
  },
};

// 하단 네비게이션
export const Bottom: Story = {
  args: {
    position: "bottom",
    items: defaultItems,
  },
};

// 좌측 네비게이션
export const Left: Story = {
  args: {
    position: "left",
    items: defaultItems,
  },
};

// 우측 네비게이션
export const Right: Story = {
  args: {
    position: "right",
    items: defaultItems,
  },
};

// 커스텀 색상
export const CustomColors: Story = {
  args: {
    position: "top",
    items: defaultItems,
    backgroundColor: "#ff6b6b",
    activeColor: "#ff5252",
  },
};

// 다크 테마
export const DarkTheme: Story = {
  render: () => (
    <GilllThemeProvider defaultDark={true}>
      <Navigation position="top" items={defaultItems} />
    </GilllThemeProvider>
  ),
};

// 인터랙티브 네비게이션
export const Interactive: Story = {
  render: () => {
    const [items, setItems] = useState(defaultItems);

    const handleItemClick = (index: number) => {
      const newItems = items.map((item, i) => ({
        ...item,
        isActive: i === index,
      }));
      setItems(newItems);
    };

    const itemsWithHandlers = items.map((item, index) => ({
      ...item,
      onClick: () => handleItemClick(index),
    }));

    return <Navigation position="top" items={itemsWithHandlers} />;
  },
};

// 라벨 없는 네비게이션
export const WithoutLabels: Story = {
  args: {
    position: "top",
    items: defaultItems.map((item) => ({
      id: item.id,
      icon: item.icon,
      isActive: item.isActive,
    })),
  },
};

// 커스텀 크기
export const CustomSize: Story = {
  args: {
    position: "top",
    items: defaultItems,
    width: "400px",
    height: "80px",
  },
};

// 여러 위치 동시 사용
export const MultiplePositions: Story = {
  render: () => (
    <div style={{ height: "100vh", position: "relative" }}>
      <Navigation position="top" items={defaultItems} />
      <Navigation position="bottom" items={defaultItems} />
      <Navigation position="left" items={defaultItems} />
      <Navigation position="right" items={defaultItems} />
    </div>
  ),
};
