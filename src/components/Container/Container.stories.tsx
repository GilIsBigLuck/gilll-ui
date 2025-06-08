import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";
import { Box } from "../Box";
import { Typography } from "../Typography";

const meta: Meta<typeof Container> = {
  title: "Gilll/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "The maximum width of the container",
    },
    padding: {
      control: "text",
      description: "The padding of the container",
    },
    margin: {
      control: "text",
      description: "The margin of the container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <Box padding="16px" backgroundColor="#f5f5f5" borderRadius="4px">
        <Typography variant="body1">
          Default Container (maxWidth: lg)
        </Typography>
      </Box>
    ),
  },
};

export const ExtraSmall: Story = {
  args: {
    maxWidth: "xs",
    children: (
      <Box padding="16px" backgroundColor="#f5f5f5" borderRadius="4px">
        <Typography variant="body1">Extra Small Container (444px)</Typography>
      </Box>
    ),
  },
};

export const Small: Story = {
  args: {
    maxWidth: "sm",
    children: (
      <Box padding="16px" backgroundColor="#f5f5f5" borderRadius="4px">
        <Typography variant="body1">Small Container (600px)</Typography>
      </Box>
    ),
  },
};

export const Medium: Story = {
  args: {
    maxWidth: "md",
    children: (
      <Box padding="16px" backgroundColor="#f5f5f5" borderRadius="4px">
        <Typography variant="body1">Medium Container (900px)</Typography>
      </Box>
    ),
  },
};

export const Large: Story = {
  args: {
    maxWidth: "lg",
    children: (
      <Box padding="16px" backgroundColor="#f5f5f5" borderRadius="4px">
        <Typography variant="body1">Large Container (1200px)</Typography>
      </Box>
    ),
  },
};

export const ExtraLarge: Story = {
  args: {
    maxWidth: "xl",
    children: (
      <Box padding="16px" backgroundColor="#f5f5f5" borderRadius="4px">
        <Typography variant="body1">Extra Large Container (1536px)</Typography>
      </Box>
    ),
  },
};

export const WithCustomPadding: Story = {
  args: {
    padding: "32px",
    children: (
      <Box padding="16px" backgroundColor="#f5f5f5" borderRadius="4px">
        <Typography variant="body1">
          Container with custom padding (32px)
        </Typography>
      </Box>
    ),
  },
};

export const WithContent: Story = {
  args: {
    children: (
      <>
        <Box
          padding="16px"
          backgroundColor="#f5f5f5"
          borderRadius="4px"
          marginBottom="16px"
        >
          <Typography variant="h4" marginBottom="8px">
            Container with Multiple Content
          </Typography>
          <Typography variant="body1">
            This container demonstrates how to use the Container component with
            multiple content blocks. The Container helps maintain a consistent
            maximum width while allowing flexible content layout.
          </Typography>
        </Box>
        <Box padding="16px" backgroundColor="#e0e0e0" borderRadius="4px">
          <Typography variant="body1">
            Another content block with different styling to demonstrate the
            container's ability to handle various content types.
          </Typography>
        </Box>
      </>
    ),
  },
};
