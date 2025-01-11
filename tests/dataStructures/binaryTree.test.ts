import { describe, expect, test } from "@jest/globals";
import { BinaryTree } from "../../src";

describe("Binary Tree", () => {
  test("Binary Tree Operations", () => {
    const binaryTree = new BinaryTree(5);
    const root = binaryTree.getRoot();
    binaryTree.insertNode(3, "L");
    binaryTree.insertNode(9, "R");
    binaryTree.insertNode(5, "LR");
    binaryTree.insertNode(7, "RL");
    binaryTree.insertNode(6, "RLL");
    binaryTree.insertNode(8, "RLR");
    binaryTree.insertNode(12, "RR");
    binaryTree.insertNode(20, "RRR");
    expect(() => binaryTree.insertNode(4, "S")).toThrow(
      "Path should only contains L and R !!",
    );
    expect(binaryTree.inorder()).toStrictEqual([3, 5, 5, 6, 7, 8, 9, 12, 20]);
    expect(binaryTree.preorder()).toStrictEqual([5, 3, 5, 9, 7, 6, 8, 12, 20]);
    expect(binaryTree.postorder()).toStrictEqual([5, 3, 6, 8, 7, 20, 12, 9, 5]);
    expect(binaryTree.levelOrder()).toStrictEqual([
      5, 3, 9, 5, 7, 12, 6, 8, 20,
    ]);
    expect(binaryTree.height()).toBe(4);
    binaryTree.updateNode(13, "");
    expect(binaryTree.preorder()).toStrictEqual([13, 3, 5, 9, 7, 6, 8, 12, 20]);
    binaryTree.updateNode(31, "RLR");
    expect(binaryTree.preorder()).toStrictEqual([
      13, 3, 5, 9, 7, 6, 31, 12, 20,
    ]);
    expect(() => binaryTree.updateNode(43, "LL")).toThrow(
      "No node exists at this path !!",
    );
    expect(() => binaryTree.updateNode(43, "LS")).toThrow(
      "Path should only contains L and R !!",
    );
    if (root != null) {
      expect(binaryTree.nodeHeight(root.getRight())).toBe(3);
    }
    binaryTree.deleteNode("RR");
    expect(binaryTree.inorder()).toStrictEqual([3, 5, 13, 6, 7, 31, 9]);
    expect(() => binaryTree.deleteNode("S")).toThrow(
      "Path should only contains L and R !!",
    );
    expect(() => binaryTree.deleteNode("SLL")).toThrow(
      "Path should only contains L and R !!",
    );
    binaryTree.deleteNode("RLL");
    expect(binaryTree.inorder()).toStrictEqual([3, 5, 13, 7, 31, 9]);
    expect(() => binaryTree.deleteNode("LLLL")).toThrow(
      "No node exists at this path !!",
    );
    binaryTree.invert();
    expect(binaryTree.inorder()).toStrictEqual([9, 31, 7, 13, 5, 3]);
    expect(binaryTree.preorder()).toStrictEqual([13, 9, 7, 31, 3, 5]);
    expect(binaryTree.postorder()).toStrictEqual([31, 7, 9, 5, 3, 13]);
    binaryTree.deleteNode("");
    expect(binaryTree.inorder()).toStrictEqual([]);
    const binaryTree2 = new BinaryTree(58);
    binaryTree2.setRoot(43);
    expect(binaryTree2.preorder()).toStrictEqual([43]);
    binaryTree2.insertNode(32, "");
    expect(binaryTree2.preorder()).toStrictEqual([32]);
  });
});
