'use strict';

const Node = require('./Node');
const LinkedList = require('./LinkedList');

// Can successfully instantiate an empty linked list
const LinkedListTest1 = new LinkedList();

// Can properly insert into the linked list & Can properly insert multiple nodes into the linked list
LinkedListTest1.insert(7);
LinkedListTest1.insert(true);

// The head property will properly point to the first node in the linked list
LinkedListTest1.insert(20);

// Will return true when finding a value within the linked list that exists
console.log(LinkedListTest1.includes(7));

// Will return false when searching for a value in the linked list that does not exist
console.log(LinkedListTest1.includes(18));
console.log(LinkedListTest1.includes('helo'));

// Can properly return a collection of all the values that exist in the linked list
console.log(LinkedListTest1.toString());


