import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@nam/react";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: { control: "select", options: ["default", "accent", "entity"] },
    entity: {
      control: "select",
      options: ["kinhaus", "ai-meetup", "island-connection", "nam-space", "external"],
    },
  },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Tag" },
};

export const Accent: Story = {
  args: { variant: "accent", children: "Featured" },
};

export const EntityBadges: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge variant="entity" entity="kinhaus">
        Kin Haus
      </Badge>
      <Badge variant="entity" entity="ai-meetup">
        AI Meetup
      </Badge>
      <Badge variant="entity" entity="island-connection">
        Island Connection
      </Badge>
      <Badge variant="entity" entity="nam-space">
        NāM Space
      </Badge>
      <Badge variant="entity" entity="external">
        External
      </Badge>
    </div>
  ),
};
