'use strict';
const { Queue } = require('../stacksQueues/stackNQueues');

/*

  Tree Overview
    Organized by hierarchy (hierarchical) - have a root and children 
    that act as subtrees from there on

  Terminology
    K-ary: Meaning 
      - Examples of Trees: family tree, DOM
    - Binary Tree: Each node has up to two children
    - Balanced: When nodes are inserted from the top to bottom and only one partially filled level
    - leaf: node with no children (nodes that live on the lowest depth of the tree)
    - path: the route taken from the starting node to an ending node (root -> leaf)
    - path weight: ask for clarification. Can be generalized or tailored but an example oculd be the sum of all nodes from the root to leaf
    - binary search tree: sorted binary tree. Lesser values to the left larger to value to right. Impacts efficiency
  
    Traversals

      Depth First Traversal (DFS)
        - pre-order: root -> left -> right
        - in-order: left -> root -> right
        - post-order: left -> right -> root
      be able to to look at a tree diagream and KNOW what the order would be

      Breath First Traversal
        - read all nodes on the 1st level, then the second level, third etc etc 
        - Use an array to store nodes in binary tree
          - use pop - will remove last value in array which represents a root
          - unshift - will add to beginning of array which represents children of last popped node
        - Recursion not recommended 

      Recursion: A function that calls itself 
        - base case: this stops recursive functions from calling itself
        - FIRST: recursive case (in binary, there are two recursive cases) CALL ON THE LEFT NODE
        - SECOND: recursive case - the function CALL ON THE RIGHT NODE
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    // this.next = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.max = null;
  }

  preOrder() {
    const traverse = (node) => {
      console.log(node.value);
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
  }

  inOrder() {
    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      console.log(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
  }

  postOrder() {
    const traverse = (node) => {

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      console.log(node.value);
    }
    traverse(this.root);
  }

  // **************** Breadth First Traversal ******************

  breadthFirst() {
    const queue = new Queue();
    const visited = new Queue();

    if (this.root) {
      queue.enqueue(this.root);
      visited.enqueue(this.root);
    }

    while (queue) {

      let parent = queue.dequeue();
      console.log(parent.value);

      if (parent.left) {
        queue.enqueue(parent.left);
        visited.enqueue(parent.left);
      }

      if (parent.right) {
        queue.enqueue(parent.right);
        visited.enqueue(parent.left);
      }
    }
  }

  maxValue () {
    if(!this.root){
      throw new Error(`Tree is Empty`);
    }

    if(!this.root.left && !this.root.right){
      this.max = this.root.value;
      return this.max;
    }

    const traverse = (node) => {

      if(node.value > this.max){
        this.max = node.value;
      }

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      // console.log(node.value);
    }
    traverse(this.root);
    return this.max;
  };
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!value) {
      throw new Error('Input value invalid');
    }

    const traversal = (node) => {
      if (!this.root) {
        return new Node(value);
      }
      if (node.right === null && node.left === null){
        console.log('****************', node.value);
        if(node.value < value){
          node.right = new Node(value);
        } else {
          node.left = new Node(value);
        }

        return;
      }

      if (node.value > value) {
        // console.log('node ::::::::::::::', node.value);
        traversal(node.left, value);
      }

      if (node.value < value) {
        // console.log('node ::::::::::::::', node.value);
        traversal(node.right, value);
      } 
    }

    traversal(this.root);

  }

  contains(value) {
    if (!this.root) {
      throw new Error('Tree is Empty');
    };

    const traverse = (root) => {
      if (root.value === value) {
        // base case
        return root;
      }

      if (root.value < value) {
        root = traverse(root.right, value);
      } 
      if (root.value > value) {
        root = traverse(root.left, value);
      }
      // console.log('final root:::::::::::',root.value === value);
      const result = root.value === value;
      return result;
    }

    return traverse(this.root);

  }

  inOrder() {
    const traverse = (node) => {
      // console.log(node);
      if (node.left) {
        traverse(node.left);
      }
      console.log(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
  }
}

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);
// tree.add(10);
// tree.add(5);
// tree.add(15);
let response = tree.maxValue();
console.log(response);

// tree.preOrder();
// tree.inOrder();
// tree.postOrder();
// tree.breadthFirst();

// tree.add(16);
// const result = tree.contains(5);
// tree.add(16);
// console.log('contains method', result);
// tree.inOrder();

module.exports = {
  BinarySearchTree,
  BinaryTree,
  Node,
};