import { Queue } from "../queue";

class TreeNode {
  private value: number | string;
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

  setValue(value: number | string) {
    this.value = value;
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

export class BinaryTree {
  private root: TreeNode | null;

  constructor(value: number | string) {
    this.root = new TreeNode(value);
  }

  /**
   * Returns the root node of the binary tree.
   */
  getRoot() {
    return this.root;
  }

  /**
   * Sets the value to the root node.
   * @param value
   */
  setRoot(value: number | string) {
    this.root?.setValue(value);
  }

  /**
   * Inserts a node with the given value at the given path. Path is a string containing the position of new node respective to the tree of the root. Path should only contain letters 'L' and 'R'.
   * @param value
   * @param path Path of the node to be inserted. It should only contain letters 'L' and 'R'. For example path "LRR" should insert node on the path Left -> Right -> Right starting from the root.
   * @returns The root of the binary tree.
   */
  insertNode(value: number | string, path: string) {
    let current = this.root;
    if (path.length === 0) {
      this.root?.setValue(value);
      return this.root;
    }
    let i = 0;
    while (i < path.length) {
      if (path[i].toLowerCase() === "l") {
        if (current?.getLeft() == null) {
          const node = new TreeNode(value);
          current?.setLeft(node);
          break;
        } else {
          current = current.getLeft();
        }
      } else if (path[i].toLowerCase() === "r") {
        if (current?.getRight() == null) {
          const node = new TreeNode(value);
          current?.setRight(node);
          break;
        } else {
          current = current.getRight();
        }
      } else {
        throw new Error("Path should only contains L and R !!");
      }
      i++;
    }
    return this.root;
  }

  private traverseInorder(node: TreeNode | null, list: (number | string)[]) {
    if (node == null) {
      return;
    }
    this.traverseInorder(node.getLeft(), list);
    list.push(node.getValue());
    this.traverseInorder(node.getRight(), list);
  }

  /**
   * Traverse the binary tree in an inorder manner.
   * @returns The list of node values in an inorder manner.
   */
  inorder() {
    const list: (number | string)[] = [];
    this.traverseInorder(this.root, list);
    return list;
  }

  private traversePreorder(node: TreeNode | null, list: (number | string)[]) {
    if (node == null) {
      return;
    }
    list.push(node.getValue());
    this.traversePreorder(node.getLeft(), list);
    this.traversePreorder(node.getRight(), list);
  }

  /**
   * Traverse the binary tree in a preorder manner.
   * @returns The list of node values in a preorder manner.
   */
  preorder() {
    const list: (number | string)[] = [];
    this.traversePreorder(this.root, list);
    return list;
  }

  private traversePostorder(node: TreeNode | null, list: (number | string)[]) {
    if (node == null) {
      return;
    }
    this.traversePostorder(node.getLeft(), list);
    this.traversePostorder(node.getRight(), list);
    list.push(node.getValue());
  }

  /**
   * Traverse the binary tree in a postorder manner.
   * @returns The list of node values in a postorder manner.
   */
  postorder() {
    const list: (number | string)[] = [];
    this.traversePostorder(this.root, list);
    return list;
  }

  /**
   * Traverse tree in a level order (Breadth First Search) manner.
   * @returns Returns the list of node values in a level order manner.
   */
  levelOrder() {
    const queue = new Queue();
    const list: (number | string)[] = [];
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
   * Returns the height of the tree.
   * @returns The height of the tree.
   */
  height() {
    return this.getHeight(this.root);
  }

  /**
   * The height of the given node in the tree.
   * @param node
   * @returns Returns Height of the node in the tree.
   */
  nodeHeight(node: TreeNode | null) {
    return this.getHeight(node);
  }

  private invertTree(node: TreeNode | null) {
    if (node == null) {
      return node;
    }
    const left = this.invertTree(node.getLeft());
    const right = this.invertTree(node.getRight());
    node.setLeft(right);
    node.setRight(left);
    return node;
  }

  /**
   * Performs tree inversion (or mirror image)
   * @returns Root of the inverted tree.
   */
  invert() {
    return this.invertTree(this.getRoot());
  }

  /**
   * Updates the value of the node of the given path with the new value.
   * @param newValue
   * @param path Path of the node, it should be in the form of 'L' and 'R'. For example, 'LRL' means traversal path should be left->right->left
   * staring from the root node.
   * @returns Root of the tree.
   */
  updateNode(newValue: number | string, path: string) {
    if (path.length === 0) {
      this.setRoot(newValue);
      return this.root;
    }
    let i = 0;
    let current = this.getRoot();
    while (i < path.length) {
      const branch = path[i].toLowerCase();
      if (branch === "l" && current != null) {
        current = current.getLeft();
      } else if (branch === "r" && current != null) {
        current = current.getRight();
      } else if (branch !== "l" && branch !== "r") {
        throw new Error("Path should only contains L and R !!");
      }
      i++;
    }
    if (current == null) {
      throw new Error("No node exists at this path !!");
    } else {
      current?.setValue(newValue);
    }
    return this.root;
  }

  /**
   * This will delete the node of tree of the given path.
   * @param path Path of the node to be deleted. Path of the node, it should be in the form of 'L' and 'R'. For example, 'LRL' means traversal path should be left->right->left
   * staring from the root node.
   * @returns Root of the tree.
   */
  deleteNode(path: string) {
    if (path.length === 0) {
      this.root = null;
      return null;
    }
    let i = 0;
    let current = this.getRoot();
    while (i < path.length - 1) {
      const branch = path[i].toLowerCase();
      if (branch === "l" && current != null) {
        current = current.getLeft();
      } else if (branch === "r" && current != null) {
        current = current.getRight();
      } else if (branch !== "l" && branch !== "r") {
        throw new Error("Path should only contains L and R !!");
      }
      i++;
    }
    if (current == null) {
      throw new Error("No node exists at this path !!");
    } else if (path[path.length - 1].toLowerCase() === "l") {
      current.setLeft(null);
    } else if (path[path.length - 1].toLowerCase() === "r") {
      current.setRight(null);
    } else {
      throw new Error("Path should only contains L and R !!");
    }
    return this.root;
  }
}
