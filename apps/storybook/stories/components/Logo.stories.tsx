import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logo } from "@nam/react";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    href: { control: "text" },
    className: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: { href: "/" },
};

export const NoLink: Story = {
  args: { href: null },
};

export const Large: Story = {
  args: {
    href: "/",
    style: { height: "3rem" },
  },
};
