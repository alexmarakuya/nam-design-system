import type { HTMLAttributes, ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual variant */
  variant?: "default" | "accent" | "entity";
  /** Entity type — sets the badge color when variant="entity" */
  entity?: "kinhaus" | "ai-meetup" | "island-connection" | "nam-space" | "external";
  children: ReactNode;
}

const entityColorMap: Record<string, string> = {
  kinhaus: "var(--nam-entity-kinhaus, #D97706)",
  "ai-meetup": "var(--nam-entity-ai-meetup, #7C3AED)",
  "island-connection": "var(--nam-entity-island-connection, #059669)",
  "nam-space": "var(--nam-entity-nam-space, #0891B2)",
  external: "var(--nam-entity-external, #6B7280)",
};

export function Badge({ variant = "default", entity, style, children, ...props }: BadgeProps) {
  const isEntity = variant === "entity" && entity;
  const entityColor = isEntity ? entityColorMap[entity] : undefined;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.125rem 0.5rem",
        borderRadius: "var(--radius-full, 9999px)",
        fontSize: "var(--text-xs, 0.75rem)",
        fontFamily: "var(--font-mono, monospace)",
        fontWeight: 500,
        lineHeight: 1.5,
        ...(variant === "default" && {
          backgroundColor: "var(--color-bg-elevated)",
          color: "var(--color-text-secondary)",
        }),
        ...(variant === "accent" && {
          backgroundColor: "var(--color-accent-soft)",
          color: "var(--color-accent)",
        }),
        ...(isEntity && {
          backgroundColor: `color-mix(in srgb, ${entityColor} 12%, transparent)`,
          color: entityColor,
        }),
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
