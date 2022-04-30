const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.roots = null;
  }

  
  root() {
    return this.roots;
  }

  add(data) {
    this.roots = addNew(this.roots, data)

    function addNew(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {

        return node
      }

      if (data < node.data) {
        node.left = addNew(node.left, data)
      } else {
        node.right = addNew(node.right, data)
      }
      return node
    }

  }

  has(data) {

    return findItem(this.roots, data)

    function findItem(node, data) {

      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      if (data < node.data) {
        return findItem(node.left, data)

      } else {
        return findItem(node.right, data)
      }
    }

  }



  find(data) {
    return newFind(this.roots, data)

    function newFind(node, date) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return newFind(node.left, data)

      } else {
        return newFind(node.right, data)
      }

    }
  }

  remove(data) {
    this.roots = removeItem(this.roots, data)
    function removeItem(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeItem(node.left, data)
        return node;
      } else if (node.data < data) {
        node.right = removeItem(node.right, data)
        return node;
      } else {
        if ((!node.left) && (!node.right)) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromR = node.right;
        while (minFromR.left) {
          minFromR = minFromR.left;
        }
        node.date = minFromR.data;
        node.right = removeItem(node.right, minFromR.data)
        return node

      }
    }
  }



  min() {
    if (!this.roots) {
      return null;
    }

    let node = this.roots;
    while (node.left) {
      node = node.left;
    }
    return node.data;

  }

  max() {
    if (!this.roots){
      return null;
    }
    let node = this.roots;
    while (node.right){
      node = node.right;
    }
    return node.data;

  }
}

module.exports = {
  BinarySearchTree
};