import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card visual variant */
  variant?: "default" | "elevated" | "outlined";
  /** Padding size */
  padding?: "none" | "sm" | "md" | "lg";
  children: ReactNode;
}

const paddingMap: Record<string, string> = {
  none: "0",
  sm: "var(--space-3, 0.75rem)",
  md: "var(--space-4, 1rem)",
  lg: "var(--space-6, 1.5rem)",
};

const variantStyles: Record<string, React.CSSProperties> = {
  default: {
    backgroundColor: "var(--color-bg-card)",
    border: "1px solid var(--color-border-subtle)",
  },
  elevated: {
    backgroundColor: "var(--color-bg-elevated)",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
  },
  outlined: {
    backgroundColor: "transparent",
    border: "1px solid var(--color-border)",
  },
};

export function Card({
  variant = "default",
  padding = "md",
  style,
  children,
  ...props
}: CardProps) {
  return (
    <div
      style={{
        borderRadius: "var(--radius-lg, 12px)",
        padding: paddingMap[padding],
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
