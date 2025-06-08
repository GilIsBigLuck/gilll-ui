import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";
import { Typography } from "../Typography";

const meta: Meta<typeof Box> = {
  title: "Gilll/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    display: {
      control: "select",
      options: ["block", "flex", "inline", "inline-block", "grid", "none"],
      description: "The display property of the box",
    },
    flexDirection: {
      control: "select",
      options: ["row", "column", "row-reverse", "column-reverse"],
      description:
        "The flex-direction property (only applies when display is flex)",
    },
    justifyContent: {
      control: "select",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      description:
        "The justify-content property (only applies when display is flex)",
    },
    alignItems: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "stretch", "baseline"],
      description:
        "The align-items property (only applies when display is flex)",
    },
    gap: {
      control: "text",
      description: "The gap between flex/grid items",
    },
    padding: {
      control: "text",
      description: "The padding of the box",
    },
    margin: {
      control: "text",
      description: "The margin of the box",
    },
    width: {
      control: "text",
      description: "The width of the box",
    },
    height: {
      control: "text",
      description: "The height of the box",
    },
    backgroundColor: {
      control: "color",
      description: "The background color of the box",
    },
    borderRadius: {
      control: "text",
      description: "The border radius of the box",
    },
    border: {
      control: "text",
      description: "The border of the box",
    },
    boxShadow: {
      control: "text",
      description: "The box shadow of the box",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  args: {
    padding: "16px",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    children: "Basic Box",
  },
};

export const FlexBox: Story = {
  args: {
    display: "flex",
    gap: "16px",
    padding: "16px",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    children: (
      <>
        <Box padding="8px" backgroundColor="#e0e0e0" borderRadius="4px">
          Item 1
        </Box>
        <Box padding="8px" backgroundColor="#e0e0e0" borderRadius="4px">
          Item 2
        </Box>
        <Box padding="8px" backgroundColor="#e0e0e0" borderRadius="4px">
          Item 3
        </Box>
      </>
    ),
  },
};

export const GridBox: Story = {
  args: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    padding: "16px",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
    children: (
      <>
        <Box padding="8px" backgroundColor="#e0e0e0" borderRadius="4px">
          Grid Item 1
        </Box>
        <Box padding="8px" backgroundColor="#e0e0e0" borderRadius="4px">
          Grid Item 2
        </Box>
        <Box padding="8px" backgroundColor="#e0e0e0" borderRadius="4px">
          Grid Item 3
        </Box>
      </>
    ),
  },
};

export const WithTypography: Story = {
  args: {
    padding: "24px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    children: (
      <>
        <Typography variant="h4" marginBottom="16px">
          Box with Typography
        </Typography>
        <Typography variant="body1">
          This is an example of a Box component containing Typography
          components. The Box provides the container styling while Typography
          handles the text styling.
        </Typography>
      </>
    ),
  },
};
