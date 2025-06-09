import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Radio, RadioGroup } from "./Radio";
import { GilllThemeProvider } from "../Theme/ThemeProvider";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
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

// 기본 라디오
export const Default: Story = {
  args: {
    label: "기본 라디오",
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
    label: "비활성화된 라디오",
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

// 크기별 라디오
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Radio size="small" label="작은 크기" />
      <Radio size="medium" label="중간 크기" />
      <Radio size="large" label="큰 크기" />
    </div>
  ),
};

// 라벨 없는 라디오
export const WithoutLabel: Story = {
  args: {},
};

// 인터랙티브 라디오
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Radio checked={checked} onChange={setChecked} label="클릭해보세요!" />
    );
  },
};

// RadioGroup 스토리
export const RadioGroupExample: Story = {
  render: () => {
    const [selected, setSelected] = useState("option1");
    return (
      <RadioGroup value={selected} onChange={setSelected} name="options">
        <Radio value="option1" label="옵션 1" />
        <Radio value="option2" label="옵션 2" />
        <Radio value="option3" label="옵션 3" />
      </RadioGroup>
    );
  },
};

// 비활성화된 RadioGroup
export const DisabledRadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState("option1");
    return (
      <RadioGroup
        value={selected}
        onChange={setSelected}
        name="options"
        disabled
      >
        <Radio value="option1" label="옵션 1" />
        <Radio value="option2" label="옵션 2" />
        <Radio value="option3" label="옵션 3" />
      </RadioGroup>
    );
  },
};

// 일부만 비활성화된 RadioGroup
export const PartiallyDisabledRadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState("option1");
    return (
      <RadioGroup value={selected} onChange={setSelected} name="options">
        <Radio value="option1" label="옵션 1" />
        <Radio value="option2" label="옵션 2" disabled />
        <Radio value="option3" label="옵션 3" />
      </RadioGroup>
    );
  },
};

// 커스텀 테마
export const CustomTheme: Story = {
  render: () => (
    <GilllThemeProvider theme={{ primary: "#ff6b6b" }}>
      <RadioGroup value="option1" name="custom-theme">
        <Radio value="option1" label="빨간색 테마 라디오 1" />
        <Radio value="option2" label="빨간색 테마 라디오 2" />
      </RadioGroup>
    </GilllThemeProvider>
  ),
};

// 수평 배치 RadioGroup
export const HorizontalRadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState("option1");
    return (
      <div style={{ display: "flex", gap: "24px" }}>
        <RadioGroup value={selected} onChange={setSelected} name="horizontal">
          <Radio value="option1" label="옵션 1" />
          <Radio value="option2" label="옵션 2" />
          <Radio value="option3" label="옵션 3" />
        </RadioGroup>
      </div>
    );
  },
};
