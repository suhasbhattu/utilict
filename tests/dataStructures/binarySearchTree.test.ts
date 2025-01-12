import { describe, expect, test } from "@jest/globals";
import { BinarySearchTree } from "../../src";

describe("Binary Search Tree", () => {
  test("Binary Search Tree Operations", () => {
    const tree = new BinarySearchTree([8, 3, 10, 6, 1, 4, 14, 7]);
    const root = tree.getRoot();
    expect(tree.inorder()).toStrictEqual([1, 3, 4, 6, 7, 8, 10, 14]);
    expect(tree.preorder()).toStrictEqual([8, 3, 1, 6, 4, 7, 10, 14]);
    expect(tree.postorder()).toStrictEqual([1, 4, 7, 6, 3, 14, 10, 8]);
    tree.insert(13);
    expect(tree.inorder()).toStrictEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
    expect(tree.preorder()).toStrictEqual([8, 3, 1, 6, 4, 7, 10, 14, 13]);
    expect(tree.postorder()).toStrictEqual([1, 4, 7, 6, 3, 13, 14, 10, 8]);
    expect(tree.levelOrder()).toStrictEqual([8, 3, 10, 1, 6, 14, 4, 7, 13]);
    expect(tree.height()).toBe(4);
    if (root != null) {
      expect(tree.nodeHeight(root.getRight())).toBe(3);
    }
  });
});
