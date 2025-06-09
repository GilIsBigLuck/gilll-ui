import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { GilllThemeProvider, useTheme, DarkModeToggle } from "./ThemeProvider";
import { Checkbox } from "../Checkbox/Checkbox";
import { Radio, RadioGroup } from "../Radio/Radio";
import { Navigation } from "../Navigation/Navigation";

// 아이콘 컴포넌트
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

const navigationItems = [
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
];

// 테마 데모 컴포넌트
const ThemeDemo: React.FC = () => {
  const { theme, isDark, toggleDarkMode } = useTheme();
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: theme.background,
        color: theme.text,
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <h1 style={{ marginBottom: "32px", color: theme.text }}>
        Gilll UI 테마 데모
      </h1>

      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "16px", color: theme.text }}>
          현재 테마 정보
        </h2>
        <div
          style={{
            padding: "16px",
            backgroundColor: theme.border,
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        >
          <p>
            <strong>현재 모드:</strong> {isDark ? "다크" : "라이트"}
          </p>
          <p>
            <strong>프라이머리 컬러:</strong> {theme.primary}
          </p>
          <p>
            <strong>배경색:</strong> {theme.background}
          </p>
          <p>
            <strong>텍스트 색상:</strong> {theme.text}
          </p>
        </div>
        <button
          onClick={toggleDarkMode}
          style={{
            padding: "12px 24px",
            backgroundColor: theme.primary,
            color: theme.background,
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {isDark ? "☀️ 라이트 모드로 전환" : "🌙 다크 모드로 전환"}
        </button>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "16px", color: theme.text }}>
          Checkbox 컴포넌트
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Checkbox
            checked={checkboxChecked}
            onChange={setCheckboxChecked}
            label="테마가 적용된 체크박스"
          />
          <Checkbox checked={true} label="체크된 상태" />
          <Checkbox disabled label="비활성화된 상태" />
        </div>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "16px", color: theme.text }}>
          Radio 컴포넌트
        </h2>
        <RadioGroup value={radioValue} onChange={setRadioValue} name="demo">
          <Radio value="option1" label="옵션 1" />
          <Radio value="option2" label="옵션 2" />
          <Radio value="option3" label="옵션 3" />
        </RadioGroup>
      </div>

      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ marginBottom: "16px", color: theme.text }}>
          Navigation 컴포넌트
        </h2>
        <div style={{ position: "relative", height: "200px" }}>
          <Navigation position="top" items={navigationItems} />
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof GilllThemeProvider> = {
  title: "Components/ThemeProvider",
  component: GilllThemeProvider,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultDark: {
      control: "boolean",
    },
    enableSystemDark: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 테마
export const Default: Story = {
  render: () => (
    <GilllThemeProvider>
      <ThemeDemo />
    </GilllThemeProvider>
  ),
};

// 기본 다크 모드
export const DefaultDark: Story = {
  render: () => (
    <GilllThemeProvider defaultDark={true}>
      <ThemeDemo />
    </GilllThemeProvider>
  ),
};

// 커스텀 테마
export const CustomTheme: Story = {
  render: () => (
    <GilllThemeProvider
      theme={{
        primary: "#ff6b6b",
        primaryHover: "#ff5252",
        primaryLight: "#ff8a80",
      }}
    >
      <ThemeDemo />
    </GilllThemeProvider>
  ),
};

// 다크 커스텀 테마
export const DarkCustomTheme: Story = {
  render: () => (
    <GilllThemeProvider
      defaultDark={true}
      theme={{
        primary: "#ff6b6b",
        primaryHover: "#ff5252",
        primaryLight: "#ff8a80",
      }}
    >
      <ThemeDemo />
    </GilllThemeProvider>
  ),
};

// 시스템 다크모드 비활성화
export const DisabledSystemDark: Story = {
  render: () => (
    <GilllThemeProvider enableSystemDark={false}>
      <ThemeDemo />
    </GilllThemeProvider>
  ),
};

// 다크모드 토글 버튼
export const DarkModeToggleButton: Story = {
  render: () => (
    <GilllThemeProvider>
      <div style={{ padding: "40px", minHeight: "100vh" }}>
        <h1>다크모드 토글 버튼 데모</h1>
        <p>우상단의 토글 버튼을 클릭해보세요!</p>
        <DarkModeToggle />
      </div>
    </GilllThemeProvider>
  ),
};
