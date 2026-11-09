const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);

    if (this._root === null) {
      this._root = newNode;
      return;
    }

    let current = this._root;

    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        } else {
          current = current.left;
        }
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          return;
        } else {
          current = current.right;
        }
      } else {
        return;
      }
    }
  }

  find(data) {
    let current = this._root;

    while (current !== null) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
          current = current.left;
      } else {
          current = current.right;
      }
    }

    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    let current = this._root;
    let parent = null;

    while (current !== null && current.data !== data) {
      parent = current;

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (current === null) {
        return;
    }

    if (current.left === null && current.right === null) {
      if (parent === null) {
          this._root = null;
      } else if (parent.left === current) {
          parent.left = null;
      } else {
          parent.right = null;
      }
    } else if (current.left === null || current.right === null) {
      const child = current.left !== null
          ? current.left
          : current.right;

      if (parent === null) {
        this._root = child;
      } else if (parent.left === current) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    } else {
      let successorParent = current;
      let successor = current.right;

      while (successor.left !== null) {
          successorParent = successor;
          successor = successor.left;
      }

      current.data = successor.data;

      if (successorParent.left === successor) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }
    }
  }

  min() {
    if (this._root === null) {
        return null;
    }

    let current = this._root;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (this._root === null) {
      return null;
    }

    let current = this._root;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};
