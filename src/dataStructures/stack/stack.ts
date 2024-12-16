import { isEqual } from "../../utils";

export class Stack {
  private readonly size: number;
  private readonly array: any[];
  private top: number;

  constructor(size?: number) {
    if (size != null && size < 0) {
      throw new Error("Stack size cannot be negative!!");
    }
    this.size = size ?? 2 ** 16 - 1;
    this.array = new Array(size).fill(undefined);
    this.top = -1;
  }

  /**
   * Checks if the stack is empty.
   * @returns `true` if the stack is empty, otherwise `false`.
   */
  isEmpty(): boolean {
    return this.top === -1;
  }

  /**
   * Checks if the stack is full.
   * @returns `true` is the stack is full, otherwise `false`.
   */
  isFull(): boolean {
    return this.top === this.size - 1;
  }

  /**
   * Pushes new item in a stack. It will throw an error if stack is full.
   * @param item
   * @returns void
   */
  push(item: any): void {
    if (this.isFull()) {
      throw new Error("Stack is full, cannot push new items!!");
    } else {
      this.top++;
      this.array[this.top] = item;
    }
  }

  /**
   * Removes the top element from the stack.
   * @returns The popped item.
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty, no items can be popped!!");
    } else {
      const item = this.array[this.top];
      this.array[this.top] = undefined;
      this.top--;
      return item;
    }
  }

  /**
   * Returns the top element in the stack.
   * @returns the top element.
   */
  peek(): any {
    return this.array[this.top];
  }

  /**
   * Returns the total elements count in the stack.
   * @returns The length of the stack.
   */
  length(): number {
    return this.top + 1;
  }

  /**
   * Searches for an item in the stack and returns its index. If item is not present, it will return `-1`.
   * @param item
   * @returns The index of matched item, `-1` if item is not present in the stack.
   */
  search(item: any): number {
    let i = 0;
    while (i <= this.top) {
      if (isEqual(this.array[i], item)) {
        return i;
      }
      i++;
    }
    return -1;
  }
}
