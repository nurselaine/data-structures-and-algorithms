/*

Can successfully instantiate an empty tree
Can s
uccessfully instantiate a tree with a single root node
For a Binary Search Tree, can successfully add a left child and right child properly to a node
Can successfully return a collection from a preorder traversal
Can successfully return a collection from an inorder traversal
Can successfully return a collection from a postorder traversal
Returns true	false for the contains method, given an existing or non-existing node value
*/
'use strict';

const { BinaryTree, BinarySearchTree, Node, KaryNode, KaryTree } = require('../tree');

let binaryTreeTest = new BinaryTree();
binaryTreeTest.root = new Node(10);
binaryTreeTest.root.left = new Node(5);
binaryTreeTest.root.right = new Node(15);
binaryTreeTest.root.left.left = new Node(1);
binaryTreeTest.root.left.right = new Node(8);
binaryTreeTest.root.right.right = new Node(17);

let binarySearchTestTree = new BinarySearchTree();
binarySearchTestTree.root = new Node(10);
binarySearchTestTree.root.left = new Node(5);
binarySearchTestTree.root.right = new Node(15);
binarySearchTestTree.root.left.left = new Node(1);
binarySearchTestTree.root.left.right = new Node(8);
binarySearchTestTree.root.right.right = new Node(17);


let kTreeTest = new KaryTree(10);

kTree.root.children.push(5);
kTree.root.children[0].parent = kTree;

kTree.root.children.push(8);
kTree.root.children[0].parent = kTree;

kTree.root.children.push(9);
kTree.root.children[0].parent = kTree;

kTree.root.children[0].children.push(new KaryNode(7));
kTree.root.children[0].children[0].parent = kTree.root.children[0];

kTree.root.children[0].children.push(new KaryNode(6));
kTree.root.children[0].children[1].parent = kTree.root.children[0];

describe('Tree Validation', () => {
  it('Can successfully instantiate an empty tree', () => {
    const newTree = new BinaryTree();

    expect(newTree.value).toBe('null');
    expect(newTree.left).toBe('null');
    expect(newTree.right).toBe('null');
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    const newTree = new BinaryTree();
    newTree.root = new Node(8);

    expect(newTree.value).toEqual(8);
    expect(newTree.left).toBe('null');
    expect(newTree.right).toBe('null');
  });

  it('Binary Search Tree: Can successfully add a left child and right child properly to a node', () => {  
    binarySearchTestTree.add(16);
    let response = binarySearchTestTree.inOrder();

    expect(response).toEqual(1,5, 8, 10, 15, 16, 17);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
     let response = binaryTreeTest.preOrder();
 
     expect(response).toEqual(10,5, 1,8,15, 17);
     expect(binaryTreeTest.root).toBe(10);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let response = binaryTreeTest.inOrder();

    expect(response).toEqual(1,5,8,10,15,17);
    expect(binaryTreeTest.root).toBe(10);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let response = binaryTreeTest.postOrder();

    expect(response).toEqual(1,  8,  5,  17,  15,  10);
    expect(binaryTreeTest.root).toBe(10);
  });

  it('Returns true	false for the contains method, given an existing or non-existing node value', () => {
    let response = binarySearchTestTree.contains(100);

    expect(response).not.toBeTruthy();
    expect(response).toEqual(false);
  });

  it('Binary Tree method returns the max value in the tree', () => {
    let response = binaryTreeTest.maxValue();

    expect(response).toEqual(17);
  });

  it('Can successfully create a K-ary tree', () => {
    let kTree = new KaryTree(10);

    kTree.root.children.push(5);
    kTree.root.children[0].parent = kTree;

    kTree.root.children.push(8);
    kTree.root.children[1].parent = kTree;

    kTree.root.children.push(9);
    kTree.root.children[2].parent = kTree;

    kTree.root.children[0].children.push(new KaryNode(7));
    kTree.root.children[0].children[0].parent = kTree.root.children[0];
    
    kTree.root.children[0].children.push(new KaryNode(6));
    kTree.root.children[0].children[1].parent = kTree.root.children[0];


    expect(kTree.root.value).toBe(10);
    expect(kTree.root.children.length).toEqual(3);
    expect(kTree.root.children[0].length).toEqual(2);
  });

  it('Handles proper fizzbuzz assignments in a K-ary tree', () => {
    kTreeTest.fizzBuzzTree();

    expect(kTreeTest.root.value).toEqual('Buzz');
    expect(kTreeTest.root.children[0].value).toEqual('Buzz');
    expect(kTreeTest.root.children[1].value).toEqual('8');
    expect(kTreeTest.root.children[2].value).toEqual('Fizz');
    expect(kTreeTest.root.children[0].children[0].value).toEqual('7');
    expect(kTreeTest.root.children[0].children[1].value).toEqual('Fizz');
  });

});