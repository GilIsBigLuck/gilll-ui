import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";
import {
  RiHome5Line,
  RiSearchLine,
  RiUserLine,
  RiSettings4Line,
} from "react-icons/ri";

const meta: Meta<typeof Navigation> = {
  title: "Gilll/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
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
};

export default meta;
type Story = StoryObj<typeof Navigation>;

const commonItems = [
  {
    id: "home",
    label: "Home",
    icon: <RiHome5Line />,
    isActive: true,
  },
  {
    id: "search",
    label: "Search",
    icon: <RiSearchLine />,
  },
  {
    id: "profile",
    label: "Profile",
    icon: <RiUserLine />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <RiSettings4Line />,
  },
];

export const TopNavigation: Story = {
  args: {
    position: "top",
    items: commonItems,
    backgroundColor: "#ffffff",
    activeColor: "#1976d2",
    hoverColor: "rgba(0, 0, 0, 0.04)",
  },
};

export const BottomNavigation: Story = {
  args: {
    position: "bottom",
    items: commonItems,
    backgroundColor: "#ffffff",
    activeColor: "#1976d2",
    hoverColor: "rgba(0, 0, 0, 0.04)",
  },
};

export const LeftNavigation: Story = {
  args: {
    position: "left",
    items: commonItems,
    backgroundColor: "#ffffff",
    activeColor: "#1976d2",
    hoverColor: "rgba(0, 0, 0, 0.04)",
    width: "240px",
  },
};

export const RightNavigation: Story = {
  args: {
    position: "right",
    items: commonItems,
    backgroundColor: "#ffffff",
    activeColor: "#1976d2",
    hoverColor: "rgba(0, 0, 0, 0.04)",
    width: "240px",
  },
};

export const DarkTheme: Story = {
  args: {
    position: "left",
    items: commonItems,
    backgroundColor: "#1a1a1a",
    activeColor: "#90caf9",
    hoverColor: "rgba(255, 255, 255, 0.08)",
    width: "240px",
  },
};

export const IconsOnly: Story = {
  args: {
    position: "bottom",
    items: commonItems.map(({ id, icon, isActive }) => ({
      id,
      label: "",
      icon,
      isActive,
    })),
    backgroundColor: "#ffffff",
    activeColor: "#1976d2",
    hoverColor: "rgba(0, 0, 0, 0.04)",
    width: "64px",
  },
};

export const CustomHeight: Story = {
  args: {
    position: "top",
    items: commonItems,
    backgroundColor: "#ffffff",
    activeColor: "#1976d2",
    hoverColor: "rgba(0, 0, 0, 0.04)",
    height: "80px",
  },
};
