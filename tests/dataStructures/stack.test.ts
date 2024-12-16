import { describe, expect, test } from "@jest/globals";
import { Stack } from "../../src";

describe("Stack", () => {
  test("Stack Operations", () => {
    const stack = new Stack();
    stack.push(2);
    expect(stack.length()).toBe(1);
    expect(stack.pop()).toBe(2);
    expect(stack.length()).toBe(0);
    stack.push(56);
    stack.push(18);
    expect(stack.peek()).toBe(18);
    expect(stack.search(18)).toBe(1);
    expect(stack.search(59)).toBe(-1);
  });

  test("Stack With Given Size", () => {
    const stack = new Stack(3);
    stack.push(26);
    stack.push(19);
    stack.push(87);
    expect(() => stack.push(56)).toThrow(
      "Stack is full, cannot push new items!!",
    );
    expect(stack.pop()).toBe(87);
    expect(stack.pop()).toBe(19);
    expect(stack.pop()).toBe(26);
    expect(() => stack.pop()).toThrow(
      "Stack is empty, no items can be popped!!",
    );
    expect(() => new Stack(-9)).toThrow("Stack size cannot be negative!!");
  });
});
