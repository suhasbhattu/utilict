import { Queue } from "../queue";
import { compare } from "../../utils";

class TreeNode {
  private readonly value: number | string;
  private left: TreeNode | null;
  private right: TreeNode | null;

  constructor(value: number | string) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  getValue() {
    return this.value;
  }

  getLeft() {
    return this.left;
  }

  setLeft(node: TreeNode | null) {
    this.left = node;
  }

  getRight() {
    return this.right;
  }

  setRight(node: TreeNode | null) {
    this.right = node;
  }
}

export class BinarySearchTree {
  private root: TreeNode | null;

  constructor(list?: any[]) {
    this.root = null;
    if (list) {
      this.constructBSTFromList(list);
    }
  }

  /**
   * Get the root of the Binary Search Tree
   * @returns The root of the Binary Search Tree.
   */
  getRoot() {
    return this.root;
  }

  private constructBSTFromList(list: (number | string)[]) {
    for (const item of list) {
      this.insertNode(this.root, item);
    }
    return this.root;
  }

  private insertNode(
    node: TreeNode | null,
    item: number | string,
  ): TreeNode | null {
    if (node === null) {
      node = new TreeNode(item);
      if (this.root === null) {
        this.root = node;
      }
      return node;
    }
    const compareValue = compare(item, node.getValue());
    if (compareValue === -1 || compareValue === 0) {
      node.setLeft(this.insertNode(node.getLeft(), item));
    } else if (compareValue === 1) {
      node.setRight(this.insertNode(node.getRight(), item));
    }
    return node;
  }

  /**
   * Inserts the new node with the given value in the Binary Search Tree.
   * @param item
   * @returns The root of the Binary Search Tree.
   */
  insert(item: number | string) {
    this.insertNode(this.root, item);
  }

  private traverseInorder(node: TreeNode | null, list: any[]) {
    if (node == null) {
      return;
    }
    this.traverseInorder(node.getLeft(), list);
    list.push(node.getValue());
    this.traverseInorder(node.getRight(), list);
  }

  /**
   * Traverse binary search tree in an inorder manner.
   * @returns The list of node values in an inorder manner.
   */
  inorder() {
    const list: any[] = [];
    this.traverseInorder(this.root, list);
    return list;
  }

  private traversePreorder(node: TreeNode | null, list: any[]) {
    if (node == null) {
      return;
    }
    list.push(node.getValue());
    this.traversePreorder(node.getLeft(), list);
    this.traversePreorder(node.getRight(), list);
  }

  /**
   * Traverse binary search tree in a preorder manner.
   * @returns Returns the list of node values in a preorder manner.
   */
  preorder() {
    const list: any[] = [];
    this.traversePreorder(this.root, list);
    return list;
  }

  private traversePostorder(node: TreeNode | null, list: any[]) {
    if (node == null) {
      return;
    }
    this.traversePostorder(node.getLeft(), list);
    this.traversePostorder(node.getRight(), list);
    list.push(node.getValue());
  }

  /**
   * Traverse binary search tree in a postorder manner.
   * @returns Returns the list of node values in a postorder manner.
   */
  postorder() {
    const list: any[] = [];
    this.traversePostorder(this.root, list);
    return list;
  }

  /**
   * Traverse tree in a level order (Breadth First Search) manner.
   * @returns Returns the list of node values in a level order manner.
   */
  levelOrder() {
    const queue = new Queue();
    const list: any[] = [];
    queue.enqueue(this.getRoot());
    while (!queue.isEmpty()) {
      const temp = queue.dequeue();
      list.push(temp.getValue());
      if (temp.getLeft() != null) {
        queue.enqueue(temp.getLeft());
      }
      if (temp.getRight() != null) {
        queue.enqueue(temp.getRight());
      }
    }
    return list;
  }

  private getHeight(node: TreeNode | null): number {
    if (node == null) {
      return 0;
    }
    return (
      1 +
      Math.max(this.getHeight(node.getLeft()), this.getHeight(node.getRight()))
    );
  }

  /**
   * Returns the height of the Binary Search Tree.
   * @returns The height of the Binary Search Tree.
   */
  height() {
    return this.getHeight(this.root);
  }

  /**
   * The height of the given node in the Binary Search Tree.
   * @param node
   * @returns Returns Height of the node in the Binary Search Tree.
   */
  nodeHeight(node: TreeNode | null) {
    return this.getHeight(node);
  }
}
