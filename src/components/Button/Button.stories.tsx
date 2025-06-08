import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { fn } from "storybook/test";

const meta: Meta<typeof Button> = {
  title: "Gilll/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Secondary Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large Button",
    primary: false,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small Button",
    primary: false,
  },
};
