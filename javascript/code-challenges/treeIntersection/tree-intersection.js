// import HashTable from '../HashTable/hashTable';
const { HashTable } = require('../HashTable/hashTable');
const { BinaryTree, Node } = require('../trees/tree');

const treeIntersection = (tree1, tree2) => {
  let repeatValues = [];
  let treeValues = new HashTable(1024);
  let count = 0;

  if(tree1.root === null || tree2.root === null){ return repeatValues };

  helper(tree1.root, treeValues, count, repeatValues);
  count = 0;
  helper(tree2.root, treeValues, count, repeatValues);

  return repeatValues;

}

function helper(node, treeValues, count, repeatValues){
  console.log('node-----', node);
  console.log(treeValues.has(node.value), node.value, treeValues.keys());
  if(treeValues.keys().includes(node.value)){
      repeatValues.push(node.value);
      console.log(repeatValues);
  } else {
    treeValues.set(node.value, {count: count, value: node.value});
    count++;
  }

  if(node.left){
    helper(node.left, treeValues, count, repeatValues);
  }

  if(node.right){
    helper(node.right, treeValues, count, repeatValues)
  }
}

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

let responseArr = treeIntersection(tree1, tree2);
console.log(responseArr);

let responseArr2 = treeIntersection(tree, tree4);
console.log(responseArr2);

module.exports = treeIntersection;