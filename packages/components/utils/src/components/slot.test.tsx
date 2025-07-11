// packages/components/utils/src/slot.test.tsx
import * as React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, beforeEach, afterEach, vi, expect } from "vitest";
import { Slot } from "./slot";

// Tiny wrapper to drive <Slot>
type TriggerProps = React.ComponentProps<"div"> & { as?: React.ElementType };
const Trigger = ({ as: Comp = Slot, ...props }: TriggerProps) => (
  <Comp {...props} />
);

describe("Slot click forwarding (with userEvent)", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  describe("when onClick is passed to Slot itself", () => {
    it("should call the Slot onClick handler", async () => {
      const handleSlotClick = vi.fn();
      render(
        <Trigger as={Slot} onClick={handleSlotClick}>
          <button>Click me</button>
        </Trigger>
      );
      await userEvent.click(screen.getByRole("button"));
      expect(handleSlotClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("when onClick is passed only on the child", () => {
    it("should call the child onClick handler", async () => {
      const handleChildClick = vi.fn();
      render(
        <Trigger as={Slot}>
          <button onClick={handleChildClick}>Click me</button>
        </Trigger>
      );
      await userEvent.click(screen.getByRole("button"));
      expect(handleChildClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("when onClick is on both Slot and child", () => {
    it("should call both handlers once", async () => {
      const handleSlotClick = vi.fn();
      const handleChildClick = vi.fn();
      render(
        <Trigger as={Slot} onClick={handleSlotClick}>
          <button onClick={handleChildClick}>Click me</button>
        </Trigger>
      );
      await userEvent.click(screen.getByRole("button"));
      expect(handleSlotClick).toHaveBeenCalledTimes(1);
      expect(handleChildClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("when onClick on child is explicitly undefined", () => {
    it("should call the Slot onClick handler even when child onClick is undefined", async () => {
      const handleSlotClick = vi.fn();
      render(
        <Trigger as={Slot} onClick={handleSlotClick}>
          <button onClick={undefined}>Click me</button>
        </Trigger>
      );
      await userEvent.click(screen.getByRole("button"));
      expect(handleSlotClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("when onClick on Slot is undefined but on child exists", () => {
    it("should call only the child onClick handler when Slot onClick is undefined", async () => {
      const handleChildClick = vi.fn();
      render(
        <Trigger as={Slot} onClick={undefined}>
          <button onClick={handleChildClick}>Click me</button>
        </Trigger>
      );
      await userEvent.click(screen.getByRole("button"));
      expect(handleChildClick).toHaveBeenCalledTimes(1);
    });
  });
});
