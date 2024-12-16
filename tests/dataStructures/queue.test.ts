import { describe, expect, test } from "@jest/globals";
import { Queue } from "../../src";

describe("Queue", () => {
  test("Queue Operations", () => {
    const queue = new Queue();
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.length()).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.length()).toBe(1);
    queue.enqueue(4);
    expect(queue.length()).toBe(2);
    expect(queue.getRear()).toBe(4);
    expect(queue.getFront()).toBe(3);
    expect(queue.search(4)).toBe(2);
    expect(queue.search(9)).toBe(-1);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBe(4);
    expect(() => queue.dequeue()).toThrow(
      "Queue is empty, cannot dequeue an item.",
    );
    expect(() => queue.getFront()).toThrow(
      "Queue is empty, cannot get the front item.",
    );
    expect(() => queue.getRear()).toThrow(
      "Queue is empty, cannot get the rear item.",
    );
  });

  test("Queue Operations With Size", () => {
    const queue = new Queue(3);
    queue.enqueue(2);
    queue.enqueue(32);
    queue.enqueue(65);
    expect(() => queue.enqueue(26)).toThrow(
      "Queue is full, cannot enqueue new items!!",
    );
    expect(() => new Queue(-9)).toThrow("Queue size cannot be negative!!");
  });
});
