import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "@nam/react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    variant: { control: "select", options: ["default", "elevated", "outlined"] },
    padding: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "A simple card with default styling.",
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: "An elevated card with shadow.",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "An outlined card with border.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Card variant="default" padding="lg" style={{ flex: 1 }}>
        <strong>Default</strong>
        <p>Card with subtle border</p>
      </Card>
      <Card variant="elevated" padding="lg" style={{ flex: 1 }}>
        <strong>Elevated</strong>
        <p>Card with shadow</p>
      </Card>
      <Card variant="outlined" padding="lg" style={{ flex: 1 }}>
        <strong>Outlined</strong>
        <p>Card with border only</p>
      </Card>
    </div>
  ),
};
