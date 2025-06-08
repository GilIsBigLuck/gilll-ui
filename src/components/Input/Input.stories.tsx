import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Gilll/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "이름",
    placeholder: "이름을 입력하세요",
  },
};

export const Password: Story = {
  args: {
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호 입력",
  },
};
