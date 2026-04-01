import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label text */
  label?: string;
}

export function Input({ label, id, style, ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontSize: "var(--text-sm, 0.875rem)",
            fontFamily: "var(--font-mono, monospace)",
            color: "var(--color-text-secondary)",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        style={{
          padding: "0.5rem 0.75rem",
          borderRadius: "var(--radius-md, 8px)",
          border: "1px solid var(--color-border)",
          backgroundColor: "var(--color-bg-card)",
          color: "var(--color-text-primary)",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "var(--text-base, 1rem)",
          outline: "none",
          transition: "border-color var(--duration-fast, 150ms)",
          ...style,
        }}
        {...props}
      />
    </div>
  );
}
