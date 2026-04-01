/**
 * NāM ecosystem entity types — the 5 community entities that appear
 * across nam-events, nam-platform, and the design system.
 */

export type Entity = "KIN_HAUS" | "AI_MEETUP" | "ISLAND_CONNECTION" | "NAM_SPACE" | "EXTERNAL";

export type EventStage = "SEED" | "BREWING" | "CONFIRMED" | "ANNOUNCED" | "DONE" | "CANCELLED";

export type EventFormat =
  | "SOCIAL"
  | "MEETUP"
  | "WORKSHOP"
  | "PERFORMANCE"
  | "COMMUNITY"
  | "RETREAT"
  | "POPUP";

export type EventRole = "HOST" | "SPEAKER";

/** Human-readable entity labels */
export const ENTITY_LABELS: Record<Entity, string> = {
  KIN_HAUS: "Kin Haus",
  AI_MEETUP: "AI Meetup",
  ISLAND_CONNECTION: "Island Connection",
  NAM_SPACE: "NāM Space",
  EXTERNAL: "External",
};

/** Entity CSS variable references (for inline styles) */
export const ENTITY_COLORS: Record<Entity, string> = {
  KIN_HAUS: "var(--nam-entity-kinhaus)",
  AI_MEETUP: "var(--nam-entity-ai-meetup)",
  ISLAND_CONNECTION: "var(--nam-entity-island-connection)",
  NAM_SPACE: "var(--nam-entity-nam-space)",
  EXTERNAL: "var(--nam-entity-external)",
};

/** Entity hex values (for non-CSS contexts) */
export const ENTITY_HEX: Record<Entity, string> = {
  KIN_HAUS: "#D97706",
  AI_MEETUP: "#7C3AED",
  ISLAND_CONNECTION: "#059669",
  NAM_SPACE: "#0891B2",
  EXTERNAL: "#6B7280",
};

/** Entity Tailwind background classes */
export const ENTITY_BG_CLASSES: Record<Entity, string> = {
  KIN_HAUS: "bg-entity-kin-haus",
  AI_MEETUP: "bg-entity-ai-meetup",
  ISLAND_CONNECTION: "bg-entity-island-connection",
  NAM_SPACE: "bg-entity-nam-space",
  EXTERNAL: "bg-entity-external",
};

/** Event stage labels */
export const STAGE_LABELS: Record<EventStage, string> = {
  SEED: "Seed",
  BREWING: "Brewing",
  CONFIRMED: "Confirmed",
  ANNOUNCED: "Announced",
  DONE: "Done",
  CANCELLED: "Cancelled",
};

/** Event stage pipeline order (excludes CANCELLED) */
export const STAGE_ORDER: EventStage[] = ["SEED", "BREWING", "CONFIRMED", "ANNOUNCED", "DONE"];

/** Event format labels */
export const FORMAT_LABELS: Record<EventFormat, string> = {
  SOCIAL: "Social",
  MEETUP: "Meetup",
  WORKSHOP: "Workshop",
  PERFORMANCE: "Performance",
  COMMUNITY: "Community",
  RETREAT: "Retreat",
  POPUP: "Pop-up",
};
