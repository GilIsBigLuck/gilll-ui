import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Gilll/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "subtitle3",
        "body1",
        "body2",
        "body3",
      ],
      description: "The typography variant to use",
    },
    color: {
      control: "color",
      description: "The text color",
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
      description: "The text alignment",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    children: "Heading 4",
  },
};

export const Heading5: Story = {
  args: {
    variant: "h5",
    children: "Heading 5",
  },
};

export const Heading6: Story = {
  args: {
    variant: "h6",
    children: "Heading 6",
  },
};

export const Subtitle1: Story = {
  args: {
    variant: "subtitle1",
    children: "Subtitle 1",
  },
};

export const Subtitle2: Story = {
  args: {
    variant: "subtitle2",
    children: "Subtitle 2",
  },
};

export const Subtitle3: Story = {
  args: {
    variant: "subtitle3",
    children: "Subtitle 3",
  },
};

export const Body1: Story = {
  args: {
    variant: "body1",
    children: "Body 1 - This is the default text style for most content.",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
    children:
      "Body 2 - This is a slightly smaller text style for secondary content.",
  },
};

export const Body3: Story = {
  args: {
    variant: "body3",
    children: "Body 3 - This is the smallest text style for tertiary content.",
  },
};

export const WithColor: Story = {
  args: {
    variant: "h1",
    color: "#007bff",
    children: "Colored Heading",
  },
};

export const Centered: Story = {
  args: {
    variant: "h2",
    align: "center",
    children: "Centered Heading",
  },
};
