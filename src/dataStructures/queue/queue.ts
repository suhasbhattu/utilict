export class Queue {
  private readonly size: number;
  private readonly array: any[];
  private front: number;
  private rear: number;

  constructor(size?: number) {
    if (size != null && size < 0) {
      throw new Error("Queue size cannot be negative!!");
    }
    this.size = size ?? 2 ** 16 - 1;
    this.array = new Array(this.size).fill(undefined);
    this.front = -1;
    this.rear = -1;
  }

  /**
   * Returns the number of items in the queue.
   * @returns the length of the queue.
   */
  length(): number {
    if (this.front == -1 && this.rear == -1) {
      return 0;
    }
    return Math.abs(this.rear - this.front) + 1;
  }

  /**
   * Checks if the queue is empty.
   * @returns `true` if the queue is empty, otherwise `false`.
   */
  isEmpty(): boolean {
    return (this.front === -1 && this.rear === -1) || this.front > this.rear;
  }

  /**
   * Checks if the queue is full.
   * @returns `true` is the queue is full, otherwise `false`.
   */
  isFull(): boolean {
    return this.length() === this.size;
  }

  /**
   * Adds a new item in the rear of the queue. If the queue is full, it will throw an error.
   * @param item
   * @returns void
   */
  enqueue(item: any): void {
    if (this.isFull()) {
      throw new Error("Queue is full, cannot enqueue new items!!");
    } else {
      if (this.front === -1) {
        this.front = 0;
      }
      this.rear++;
      this.array[this.rear % this.size] = item;
    }
  }

  /**
   * Removes the front item from the queue. If the queue is empty, it will throw an error.
   * @returns the front item of the queue.
   */
  dequeue(): any {
    if (this.isEmpty()) {
      throw new Error("Queue is empty, cannot dequeue an item.");
    } else {
      const item = this.array[this.front];
      this.array[this.front % this.size] = undefined;
      this.front++;
      if (this.front > this.rear) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  }

  /**
   * Returns the front element of the queue.
   * @returns The front element of the queue.
   */
  getFront(): any {
    if (this.isEmpty()) {
      throw new Error("Queue is empty, cannot get the front item.");
    } else {
      return this.array[this.front];
    }
  }

  /**
   * Returns the rear element of the queue.
   * @returns The rear element of the queue.
   */
  getRear(): any {
    if (this.isEmpty()) {
      throw new Error("Queue is empty, cannot get the rear item.");
    } else {
      return this.array[this.rear];
    }
  }

  /**
   * Searches for an item in the queue and returns its index. If item is not present, it will return `-1`.
   * @param item
   * @returns The index of matched item. If not matched, it will return -1.
   */
  search(item: any): number {
    let i = Math.min(this.front, this.rear);
    const j = Math.max(this.front, this.rear);
    while (i <= j) {
      if (this.array[i] === item) {
        return i;
      }
      i++;
    }
    return -1;
  }
}
