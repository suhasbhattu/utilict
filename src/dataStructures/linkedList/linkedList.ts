class LinkedListNode {
  private value: string | number;
  private next: LinkedListNode | null;

  constructor(value: string | number) {
    this.value = value;
    this.next = null;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }

  setValue(value: string | number) {
    this.value = value;
  }

  setNext(next: LinkedListNode | null) {
    this.next = next;
  }
}

export class LinkedList {
  private head: LinkedListNode | null;

  constructor(list?: (string | number)[]) {
    this.head = null;
    if (list) {
      this.constructFromArray(list);
    }
  }

  getHead() {
    return this.head;
  }

  setHead(value: LinkedListNode | null) {
    this.head = value;
  }

  /**
   * Construct the linked list from an array.
   * @param array
   * @returns The head of the linked list.
   */
  constructFromArray(array: (string | number)[]) {
    let currentNode = null;
    this.setHead(null);
    if (array.length > 0) {
      for (const item of array) {
        const newNode = new LinkedListNode(item);
        if (this.getHead() === null) {
          this.setHead(newNode);
          currentNode = this.getHead();
        } else {
          currentNode?.setNext(newNode);
          currentNode = newNode;
        }
      }
    }
    return this.head;
  }

  /**
   * Reverse the given linked list and returns the head of the reversed linked list.
   * @returns The head of the linked list.
   */
  reverse() {
    if (this.head) {
      let previous: LinkedListNode | null = null;
      let current: LinkedListNode | null = this.head;
      let next: LinkedListNode | null = null;
      while (current !== null) {
        next = current.getNext();
        current.setNext(previous);
        previous = current;
        current = next;
      }
      this.head = previous;
    }
    return this.head;
  }

  /**
   * Returns the linked list node count in the given list.
   * @returns The node count of the linked list.
   */
  length(): number {
    if (this.head) {
      let length = 0;
      let current: LinkedListNode | null = this.head;
      while (current !== null) {
        length++;
        current = current.getNext();
      }
      return length;
    }
    return 0;
  }

  /**
   * Sets the node with given value as a head of the list.
   * @param value
   * @returns The new head of the list.
   */
  addFirst(value: string | number) {
    const newNode = new LinkedListNode(value);
    newNode.setNext(this.head);
    this.setHead(newNode);
    return this.head;
  }

  /**
   * Sets the node with the given value and adds to the last of the linked list.
   * @param value
   * @returns The head of the list.
   */
  addLast(value: string | number) {
    const newNode = new LinkedListNode(value);
    if (this.head) {
      let currentNode: LinkedListNode | null = this.head;
      while (currentNode?.getNext() !== null) {
        if (currentNode) {
          currentNode = currentNode.getNext();
        }
      }
      currentNode.setNext(newNode);
    } else {
      this.setHead(newNode);
    }
    return this.head;
  }

  private addIndex(
    value: string | number,
    index: number,
  ): LinkedListNode | null {
    const newNode = new LinkedListNode(value);
    let currentIndex = 0;
    let current: LinkedListNode | null = this.head;
    while (currentIndex < index - 1) {
      if (current) {
        current = current.getNext();
        currentIndex++;
      }
    }
    if (current !== null) {
      newNode.setNext(current.getNext());
      current.setNext(newNode);
    }
    return this.head;
  }

  /**
   * Adds the node at a given index. If index is not provided, then it will add node to the last of the linked list.
   * @param value
   * @param index
   * @returns The head of linked list.
   */
  add(value: string | number, index?: number) {
    if (index != null) {
      if (index === 0) {
        this.addFirst(value);
      } else if (index >= this.length()) {
        this.addLast(value);
      } else {
        this.addIndex(value, index);
      }
    } else {
      this.addLast(value);
    }
    return this.head;
  }

  /**
   * Removes the first node of the linked list.
   * @returns The head of the linked list.
   */
  removeFirst() {
    if (this.head) {
      this.setHead(this.head.getNext());
      return this.head;
    }
    return null;
  }

  /**
   * Removes the last node of the linked list.
   * @returns The head of the linked list.
   */
  removeLast() {
    if (this.head) {
      if (this.head.getNext() === null) {
        this.head = null;
      } else {
        let currentNode: LinkedListNode | null = this.head;
        while (
          currentNode?.getNext() &&
          currentNode?.getNext()?.getNext() !== null
        ) {
          if (currentNode) {
            currentNode = currentNode.getNext();
          }
        }
        currentNode?.setNext(null);
        return this.head;
      }
      return this.head;
    }
    return null;
  }

  private removeIndex(index: number): LinkedListNode | null {
    if (this.head !== null) {
      let currentIndex = 0;
      let current: LinkedListNode | null = this.head;
      while (currentIndex < index - 1) {
        if (current) {
          current = current.getNext();
          currentIndex++;
        }
      }
      if (current && current?.getNext() !== null) {
        const next = current.getNext();
        if (next !== null) {
          current?.setNext(next?.getNext());
        }
      }
    }
    return this.head;
  }

  /**
   * Removes the node at a given index. If index is not provided, it will remove a first node.
   * @param index
   * @returns The head of the linked list.
   */
  remove(index?: number): void {
    if (index != null) {
      if (index < 0 || index >= this.length()) {
        throw new Error(
          "Provided index is not in the range of the linked list !!",
        );
      } else if (index === 0) {
        this.removeFirst();
      } else if (index === this.length() - 1) {
        this.removeLast();
      } else {
        this.removeIndex(index);
      }
    } else {
      this.removeFirst();
    }
  }

  /**
   * Gets the value of node at a given index.
   * @param index index
   * @returns Value of node at given index.
   */
  getValue(index: number): string | number | null {
    if (this.head) {
      if (index < 0 || index >= this.length()) {
        throw new Error(
          "Provided index is not in the range of the linked list !!",
        );
      }
      let currentIndex = 0;
      let current: LinkedListNode | null = this.head;
      while (currentIndex < index) {
        if (current) {
          current = current.getNext();
          currentIndex++;
        }
      }
      if (current) {
        return current.getValue();
      }
    }
    return null;
  }

  /**
   * Update the value of node at a given index.
   * @param newValue New updated value.
   * @param index update index.
   * @returns The head of the linked list.
   */
  update(newValue: any, index: number) {
    if (this.head) {
      if (index < 0 || index >= this.length()) {
        throw new Error(
          "Provided index is not in the range of the linked list !!",
        );
      }
      if (index === 0) {
        this.getHead()?.setValue(newValue);
        return this.getHead();
      }
      let currentIndex = 0;
      let current: LinkedListNode | null = this.head;
      while (currentIndex < index) {
        if (current) {
          current = current.getNext();
          currentIndex++;
        }
      }
      current?.setValue(newValue);
      return this.getHead();
    }
    return null;
  }

  /**
   * Return the middle node of the linked list.
   * @returns The middle node of a given list. If linked list has even node count, it will return a node having index (length / 2) + 1.
   */
  getMiddleNode(): LinkedListNode | null {
    if (this.head) {
      let slow: LinkedListNode | null = this.head;
      let fast: LinkedListNode | null = this.head;
      while (fast?.getNext()) {
        if (slow) {
          slow = slow.getNext();
        }
        if (fast.getNext() !== null) {
          const next: any = fast.getNext();
          if (next !== null) {
            fast = next.getNext();
          }
        }
      }
      return slow;
    }
    return null;
  }

  /**
   * Return the middle node value.
   * @returns The middle node value of a given list. If linked list has even node count, it will return a node having index (length / 2) + 1.
   */
  getMiddleValue() {
    if (this.head !== null) {
      const node = this.getMiddleNode();
      return node?.getValue();
    }
    return null;
  }

  private rotate(position: number): LinkedListNode | null {
    let current: LinkedListNode | null = this.head;
    let currentIndex = 0;
    while (currentIndex < position - 1) {
      if (current) {
        current = current.getNext();
        currentIndex++;
      }
    }
    if (current) {
      const newHead: LinkedListNode | null = current.getNext();
      current.setNext(null);
      current = newHead;
      while (current?.getNext() != null) {
        current = current.getNext();
      }
      current?.setNext(this.head);
      this.head = newHead;
    }
    return this.head;
  }

  /**
   * Rotates the linked list to the right by given position. If position is negative, then it will rotate it towards left by given position.
   * @param pos Number of position by which the linked list to be rotated. If position is not provided, it will rotate it by 1.
   * @returns Head of linked list.
   */
  rotateRight(pos?: number): LinkedListNode | null {
    if (this.head !== null) {
      const length = this.length();
      const position = pos != null ? pos % length : 1;
      if (position === 0) {
        return this.head;
      } else if (position < 0) {
        this.rotate(Math.abs(position));
      } else {
        this.rotate(length - position);
      }
    }
    return null;
  }

  /**
   * Rotates the linked list to the left by given position. If position is negative, then it will rotate it towards right by given position.
   * @param pos Number of position by which the linked list to be rotated. If position is not provided, it will rotate it by 1.
   * @returns Head of linked list.
   */
  rotateLeft(pos?: number): LinkedListNode | null {
    if (this.head !== null) {
      const length = this.length();
      const position = pos != null ? pos % length : 1;
      if (position === 0) {
        return this.head;
      } else if (position < 0) {
        this.rotate(length - Math.abs(position));
      } else {
        this.rotate(position);
      }
    }
    return null;
  }

  /**
   * Concatenates second linked list into first one and return the first linked list.
   * @param list Second List
   * @returns First Linked List with merged list
   */
  concat(list: LinkedList) {
    if (this.head !== null) {
      let current: LinkedListNode | null = this.head;
      while (current?.getNext() !== null) {
        if (current != null) {
          current = current.getNext();
        }
      }
      current.setNext(list.head);
      return this;
    } else {
      this.head = list.head;
      return list;
    }
  }

  print(): string {
    if (this.head !== null) {
      const list = [];
      let current: LinkedListNode | null = this.head;
      while (current !== null) {
        list.push(current.getValue());
        current = current.getNext();
      }
      return list.join(" -> ");
    }
    return "";
  }
}
