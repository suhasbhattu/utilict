import { describe, expect, test } from "@jest/globals";
import { LinkedList } from "../../src";

describe("Linked List", () => {
  test("Linked List Operations", () => {
    const linkedList = new LinkedList([123, 432, 54, 67]);
    expect(linkedList.print()).toBe("123 -> 432 -> 54 -> 67");
    linkedList.add(96);
    expect(linkedList.print()).toBe("123 -> 432 -> 54 -> 67 -> 96");
    linkedList.addFirst(52);
    expect(linkedList.print()).toBe("52 -> 123 -> 432 -> 54 -> 67 -> 96");
    linkedList.reverse();
    expect(linkedList.print()).toBe("96 -> 67 -> 54 -> 432 -> 123 -> 52");
    linkedList.add(28, 2);
    expect(linkedList.print()).toBe("96 -> 67 -> 28 -> 54 -> 432 -> 123 -> 52");
    expect(linkedList.length()).toBe(7);
    linkedList.remove(3);
    expect(linkedList.print()).toBe("96 -> 67 -> 28 -> 432 -> 123 -> 52");
    linkedList.removeLast();
    expect(linkedList.print()).toBe("96 -> 67 -> 28 -> 432 -> 123");
    linkedList.removeFirst();
    expect(linkedList.print()).toBe("67 -> 28 -> 432 -> 123");
    expect(linkedList.length()).toBe(4);
    expect(linkedList.getValue(0)).toBe(67);
    expect(linkedList.getValue(2)).toBe(432);
    linkedList.update(95, 2);
    expect(linkedList.print()).toBe("67 -> 28 -> 95 -> 123");
    linkedList.update(16, 0);
    expect(linkedList.print()).toBe("16 -> 28 -> 95 -> 123");
    const middleNode = linkedList.getMiddleNode();
    expect(middleNode.getValue()).toBe(95);
    expect(linkedList.getMiddleValue()).toBe(95);
    linkedList.rotateLeft(1);
    expect(linkedList.print()).toBe("28 -> 95 -> 123 -> 16");
    linkedList.rotateLeft(-1);
    expect(linkedList.print()).toBe("16 -> 28 -> 95 -> 123");
    linkedList.rotateRight(1);
    expect(linkedList.print()).toBe("123 -> 16 -> 28 -> 95");
    linkedList.rotateRight(-1);
    expect(linkedList.print()).toBe("16 -> 28 -> 95 -> 123");
    const newLinkedList = new LinkedList([34, 65, 78]);
    linkedList.concat(newLinkedList);
    expect(linkedList.print()).toBe("16 -> 28 -> 95 -> 123 -> 34 -> 65 -> 78");
    expect(() => linkedList.remove(-9)).toThrow(
      "Provided index is not in the range of the linked list !!",
    );
    expect(() => linkedList.getValue(-9)).toThrow(
      "Provided index is not in the range of the linked list !!",
    );
    expect(() => linkedList.update(82, 90)).toThrow(
      "Provided index is not in the range of the linked list !!",
    );
    linkedList.add(32, 0);
    expect(linkedList.print()).toBe(
      "32 -> 16 -> 28 -> 95 -> 123 -> 34 -> 65 -> 78",
    );
    linkedList.add(35, 98);
    expect(linkedList.print()).toBe(
      "32 -> 16 -> 28 -> 95 -> 123 -> 34 -> 65 -> 78 -> 35",
    );
    expect(linkedList.length()).toBe(9);
    linkedList.remove(0);
    expect(linkedList.print()).toBe(
      "16 -> 28 -> 95 -> 123 -> 34 -> 65 -> 78 -> 35",
    );
    linkedList.remove(7);
    expect(linkedList.print()).toBe("16 -> 28 -> 95 -> 123 -> 34 -> 65 -> 78");
    linkedList.remove();
    expect(linkedList.print()).toBe("28 -> 95 -> 123 -> 34 -> 65 -> 78");
    linkedList.rotateRight(0);
    expect(linkedList.print()).toBe("28 -> 95 -> 123 -> 34 -> 65 -> 78");
    linkedList.rotateLeft(0);
    expect(linkedList.print()).toBe("28 -> 95 -> 123 -> 34 -> 65 -> 78");
    linkedList.rotateRight();
    expect(linkedList.print()).toBe("78 -> 28 -> 95 -> 123 -> 34 -> 65");
    linkedList.rotateLeft();
    expect(linkedList.print()).toBe("28 -> 95 -> 123 -> 34 -> 65 -> 78");
  });

  test("Empty Linked List Tests", () => {
    const linkedList = new LinkedList();
    expect(linkedList.length()).toBe(0);
    expect(linkedList.print()).toBe("");
    linkedList.addLast(52);
    expect(linkedList.print()).toBe("52");
    linkedList.removeLast();
    expect(linkedList.print()).toBe("");
    expect(linkedList.removeFirst()).toBe(null);
    expect(linkedList.removeLast()).toBe(null);
    expect(linkedList.getValue(0)).toBe(null);
    expect(linkedList.update(25, 6)).toBe(null);
    expect(linkedList.getMiddleNode()).toBe(null);
    expect(linkedList.getMiddleValue()).toBe(null);
    const newLinkedList = new LinkedList([23, 54]);
    linkedList.concat(newLinkedList);
    expect(linkedList.print()).toBe("23 -> 54");
  });
});
