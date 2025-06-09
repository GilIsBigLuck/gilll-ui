import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { GilllThemeProvider } from "../Theme/ThemeProvider";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    label: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <GilllThemeProvider>
        <Story />
      </GilllThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 체크박스
export const Default: Story = {
  args: {
    label: "기본 체크박스",
  },
};

// 체크된 상태
export const Checked: Story = {
  args: {
    checked: true,
    label: "체크된 상태",
  },
};

// 비활성화된 상태
export const Disabled: Story = {
  args: {
    disabled: true,
    label: "비활성화된 체크박스",
  },
};

// 체크된 비활성화 상태
export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: "체크된 비활성화 상태",
  },
};

// 크기별 체크박스
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Checkbox size="small" label="작은 크기" />
      <Checkbox size="medium" label="중간 크기" />
      <Checkbox size="large" label="큰 크기" />
    </div>
  ),
};

// 라벨 없는 체크박스
export const WithoutLabel: Story = {
  args: {},
};

// 인터랙티브 체크박스
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox checked={checked} onChange={setChecked} label="클릭해보세요!" />
    );
  },
};

// 여러 체크박스
export const Multiple: Story = {
  render: () => {
    const [checkboxes, setCheckboxes] = useState({
      option1: false,
      option2: false,
      option3: false,
    });

    const handleChange = (key: string, value: boolean) => {
      setCheckboxes((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Checkbox
          checked={checkboxes.option1}
          onChange={(value) => handleChange("option1", value)}
          label="옵션 1"
        />
        <Checkbox
          checked={checkboxes.option2}
          onChange={(value) => handleChange("option2", value)}
          label="옵션 2"
        />
        <Checkbox
          checked={checkboxes.option3}
          onChange={(value) => handleChange("option3", value)}
          label="옵션 3"
        />
      </div>
    );
  },
};

// 커스텀 테마
export const CustomTheme: Story = {
  render: () => (
    <GilllThemeProvider theme={{ primary: "#ff6b6b" }}>
      <Checkbox label="빨간색 테마 체크박스" />
    </GilllThemeProvider>
  ),
};
