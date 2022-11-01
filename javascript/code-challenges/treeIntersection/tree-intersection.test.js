'use strict';

const treeIntersection = require('./tree-intersection');
const { BinaryTree, Node } = require('../trees/tree');

let tree1 = new BinaryTree();
tree1.root = new Node(10);
tree1.root.left = new Node(5);
tree1.root.right = new Node(15);

let tree2 = new BinaryTree();
tree2.root = new Node(10);
tree2.root.left = new Node(1);
tree2.root.right = new Node(15);

let tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

let tree4 = new BinaryTree();
tree4.root = new Node(10);
tree4.root.left = new Node(5);
tree4.root.right = new Node(15);
tree4.root.left.left = new Node(1);
tree4.root.left.right = new Node(8);
tree4.root.right.right = new Node(17);

let emptyTree = new BinaryTree();

describe('Tree Intersection', () => {
  test('Can successfully return an array', () => {
    const responseArr = treeIntersection(tree1, tree2);

    expect(responseArr).toEqual(expect.arrayContaining([10, 15]));
    expect
  });

  test('Handles two identical trees as input', () => {
    const responseArr = treeIntersection(tree, tree4);

    expect(responseArr).toEqual(expect.arrayContaining([10, 5, 1, 8, 15, 17]));
    expect
  });

  test('Handles empty tree', () => {
    const responseArr = treeIntersection(tree, emptyTree);

    expect(responseArr).toEqual(expect.arrayContaining([]));
    expect
  });
})