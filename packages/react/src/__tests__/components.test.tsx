/**
 * @vitest-environment jsdom
 */
import { describe, it, expect } from "vitest";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Button } from "../components/Button";
import { Badge } from "../components/Badge";

describe("Button", () => {
  it("renders with children text", () => {
    const html = renderToStaticMarkup(<Button>Click me</Button>);
    expect(html).toContain("Click me");
    expect(html).toContain("<button");
  });

  it("renders primary variant by default", () => {
    const html = renderToStaticMarkup(<Button>Test</Button>);
    // Primary sets backgroundColor to var(--color-accent)
    expect(html).toContain("color-accent");
  });

  it("renders secondary variant with border", () => {
    const html = renderToStaticMarkup(<Button variant="secondary">Test</Button>);
    expect(html).toContain("color-border");
  });

  it("renders ghost variant", () => {
    const html = renderToStaticMarkup(<Button variant="ghost">Test</Button>);
    expect(html).toContain("color-text-secondary");
  });

  it("passes through HTML button attributes", () => {
    const html = renderToStaticMarkup(
      <Button disabled type="submit">
        Submit
      </Button>,
    );
    expect(html).toContain("disabled");
    expect(html).toContain('type="submit"');
  });
});

describe("Badge", () => {
  it("renders with children text", () => {
    const html = renderToStaticMarkup(<Badge>Active</Badge>);
    expect(html).toContain("Active");
    expect(html).toContain("<span");
  });

  it("renders entity variant with correct color variable", () => {
    const html = renderToStaticMarkup(
      <Badge variant="entity" entity="kinhaus">
        Kin Haus
      </Badge>,
    );
    expect(html).toContain("nam-entity-kinhaus");
  });

  it("renders accent variant", () => {
    const html = renderToStaticMarkup(<Badge variant="accent">New</Badge>);
    expect(html).toContain("color-accent");
  });
});
