import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const baseStyles: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  borderRadius: "var(--radius-md, 8px)",
  fontFamily: "var(--font-mono, monospace)",
  fontWeight: 500,
  cursor: "pointer",
  transition: "all var(--duration-fast, 150ms) var(--ease-out, ease-out)",
  border: "none",
};

const variantStyles: Record<string, React.CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-accent)",
    color: "var(--nam-white, #ffffff)",
  },
  secondary: {
    backgroundColor: "transparent",
    color: "var(--color-text-primary)",
    border: "1px solid var(--color-border)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--color-text-secondary)",
  },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  sm: { padding: "0.375rem 0.75rem", fontSize: "var(--text-sm, 0.875rem)" },
  md: { padding: "0.5rem 1rem", fontSize: "var(--text-base, 1rem)" },
  lg: { padding: "0.75rem 1.5rem", fontSize: "var(--text-lg, 1.125rem)" },
};

export function Button({
  variant = "primary",
  size = "md",
  style,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
