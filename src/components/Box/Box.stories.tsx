import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";
import { Typography } from "../Typography";
import { GilllThemeProvider } from "../Theme/ThemeProvider";

const meta: Meta<typeof Box> = {
  title: "Gilll/Box",
  component: Box,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <GilllThemeProvider>
        <Story />
      </GilllThemeProvider>
    ),
  ],
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
    borderRadius: "4px",
    margin: "20px",
    children: "Basic Box",
  },
};

export const WithDefaultShadow: Story = {
  args: {
    padding: "24px",
    borderRadius: "8px",
    margin: "20px",
    children: "Box with Default Shadow",
  },
};

export const FlexBox: Story = {
  args: {
    display: "flex",
    gap: "16px",
    padding: "16px",
    borderRadius: "4px",
    margin: "20px",
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
    borderRadius: "4px",
    margin: "20px",
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
    borderRadius: "8px",
    margin: "20px",
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

export const Loading: Story = {
  args: {
    padding: "24px",
    borderRadius: "8px",
    margin: "20px",
    loading: true,
    children: (
      <>
        <Typography variant="h4" marginBottom="16px">
          This content will be hidden when loading
        </Typography>
        <Typography variant="body1">
          This text will be replaced by a spinner when loading is true.
        </Typography>
      </>
    ),
  },
};

export const LoadingWithCustomColor: Story = {
  args: {
    padding: "24px",
    borderRadius: "8px",
    margin: "20px",
    loading: true,
    loadingSpinnerColor: "#ff6b6b",
    children: (
      <>
        <Typography variant="h4" marginBottom="16px">
          Custom colored spinner
        </Typography>
        <Typography variant="body1">
          This spinner has a custom red color.
        </Typography>
      </>
    ),
  },
};

export const LoadingFlexBox: Story = {
  args: {
    display: "flex",
    gap: "16px",
    padding: "24px",
    borderRadius: "8px",
    margin: "20px",
    loading: true,
    children: (
      <>
        <Box padding="16px" backgroundColor="#e0e0e0" borderRadius="4px">
          Flex Item 1
        </Box>
        <Box padding="16px" backgroundColor="#e0e0e0" borderRadius="4px">
          Flex Item 2
        </Box>
        <Box padding="16px" backgroundColor="#e0e0e0" borderRadius="4px">
          Flex Item 3
        </Box>
      </>
    ),
  },
};

export const LoadingGridBox: Story = {
  args: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    padding: "24px",
    borderRadius: "8px",
    margin: "20px",
    loading: true,
    children: (
      <>
        <Box padding="16px" backgroundColor="#e0e0e0" borderRadius="4px">
          Grid Item 1
        </Box>
        <Box padding="16px" backgroundColor="#e0e0e0" borderRadius="4px">
          Grid Item 2
        </Box>
        <Box padding="16px" backgroundColor="#e0e0e0" borderRadius="4px">
          Grid Item 3
        </Box>
        <Box padding="16px" backgroundColor="#e0e0e0" borderRadius="4px">
          Grid Item 4
        </Box>
        <Box padding="16px" backgroundColor="#e0e0e0" borderRadius="4px">
          Grid Item 5
        </Box>
        <Box padding="16px" backgroundColor="#e0e0e0" borderRadius="4px">
          Grid Item 6
        </Box>
      </>
    ),
  },
};

export const LoadingWithDifferentSizes: Story = {
  args: {
    padding: "24px",
    borderRadius: "8px",
    margin: "20px",
    loading: true,
    width: "300px",
    height: "200px",
    children: (
      <>
        <Typography variant="h4" marginBottom="16px">
          Fixed size box with loading
        </Typography>
        <Typography variant="body1">
          This box has fixed width and height.
        </Typography>
      </>
    ),
  },
};

export const LoadingWithThemeColor: Story = {
  args: {
    padding: "24px",
    borderRadius: "8px",
    margin: "20px",
    loading: true,
    loadingSpinnerColor: "var(--gilll-primary)",
    children: (
      <>
        <Typography variant="h4" marginBottom="16px">
          Theme-colored spinner
        </Typography>
        <Typography variant="body1">
          This spinner uses the theme's primary color.
        </Typography>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    padding: "24px",
    borderRadius: "8px",
    margin: "20px",
    disabled: true,
    onClick: () => alert("Box clicked!"),
    children: (
      <>
        <Typography variant="h4" marginBottom="16px">
          Disabled Box
        </Typography>
        <Typography variant="body1">
          This box is disabled. It has reduced opacity and no pointer events.
        </Typography>
      </>
    ),
  },
};

export const DisabledWithLoading: Story = {
  args: {
    padding: "24px",
    borderRadius: "8px",
    margin: "20px",
    disabled: true,
    loading: true,
    onClick: () => alert("Box clicked!"),
    children: (
      <>
        <Typography variant="h4" marginBottom="16px">
          Disabled and Loading
        </Typography>
        <Typography variant="body1">
          This box is both disabled and loading.
        </Typography>
      </>
    ),
  },
};

export const InteractiveBox: Story = {
  args: {
    padding: "24px",
    borderRadius: "8px",
    margin: "20px",
    onClick: () => alert("Box clicked!"),
    children: (
      <>
        <Typography variant="h4" marginBottom="16px">
          Interactive Box
        </Typography>
        <Typography variant="body1">
          Click this box to see an alert. This demonstrates the onClick
          functionality.
        </Typography>
      </>
    ),
  },
};

export const DisabledInteractiveBox: Story = {
  args: {
    padding: "24px",
    borderRadius: "8px",
    margin: "20px",
    disabled: true,
    onClick: () => alert("Box clicked!"),
    children: (
      <>
        <Typography variant="h4" marginBottom="16px">
          Disabled Interactive Box
        </Typography>
        <Typography variant="body1">
          This box has an onClick handler but is disabled, so clicking won't
          work.
        </Typography>
      </>
    ),
  },
};
