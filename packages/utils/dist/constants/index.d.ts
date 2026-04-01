/**
 * NāM ecosystem entity types — the 5 community entities that appear
 * across nam-events, nam-platform, and the design system.
 */
type Entity = "KIN_HAUS" | "AI_MEETUP" | "ISLAND_CONNECTION" | "NAM_SPACE" | "EXTERNAL";
type EventStage = "SEED" | "BREWING" | "CONFIRMED" | "ANNOUNCED" | "DONE" | "CANCELLED";
type EventFormat =
  | "SOCIAL"
  | "MEETUP"
  | "WORKSHOP"
  | "PERFORMANCE"
  | "COMMUNITY"
  | "RETREAT"
  | "POPUP";
type EventRole = "HOST" | "SPEAKER";
/** Human-readable entity labels */
declare const ENTITY_LABELS: Record<Entity, string>;
/** Entity CSS variable references (for inline styles) */
declare const ENTITY_COLORS: Record<Entity, string>;
/** Entity hex values (for non-CSS contexts) */
declare const ENTITY_HEX: Record<Entity, string>;
/** Entity Tailwind background classes */
declare const ENTITY_BG_CLASSES: Record<Entity, string>;
/** Event stage labels */
declare const STAGE_LABELS: Record<EventStage, string>;
/** Event stage pipeline order (excludes CANCELLED) */
declare const STAGE_ORDER: EventStage[];
/** Event format labels */
declare const FORMAT_LABELS: Record<EventFormat, string>;

export {
  ENTITY_BG_CLASSES,
  ENTITY_COLORS,
  ENTITY_HEX,
  ENTITY_LABELS,
  type Entity,
  type EventFormat,
  type EventRole,
  type EventStage,
  FORMAT_LABELS,
  STAGE_LABELS,
  STAGE_ORDER,
};
