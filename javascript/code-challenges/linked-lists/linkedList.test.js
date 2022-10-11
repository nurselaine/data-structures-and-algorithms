'use strict';

const Node = require('./Node');
const LinkedList = require('./LinkedList');

// Can successfully instantiate an empty linked list
const LinkedListTest1 = new LinkedList();
LinkedListTest1.insert(5);
LinkedListTest1.insert(3);
LinkedListTest1.insert(1);
// console.log(LinkedListTest1.toString());

const LinkedListTest2 = new LinkedList();
LinkedListTest2.insert(6);
LinkedListTest2.insert(4);
LinkedListTest2.insert(2);
// console.log(LinkedListTest2.toString());


// LinkedListTest1.zipLists(LinkedListTest1, LinkedListTest2);
// console.log(LinkedListTest1.toString());
describe('Linked List Classes', () => {
  it('Can properly insert into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);

    expect(LinkedListTest1.head.next.data).toEqual(1)
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);

    expect(linkedList.head.next.data).toEqual(3);
    expect(linkedList.head.next.next.data).toEqual(2);
    expect(linkedList.head.next.next.next.data).toEqual(1);
  });
  it('The head property will properly point to the first node in the linked list', () => {
    expect(LinkedListTest1.head.next.data).toEqual(1)
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    expect(LinkedListTest1.includes(3)).toBe(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    const response = LinkedListTest1.includes('ten');
    
    expect(response).toEqual(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const result = LinkedListTest1.toString();
    expect(result).toEqual('{1} -> {3} -> {5} -> NULL');
  });

  it('Can successfully add a node to the end of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.append(0);

    let current = linkedList.head.next;

    while(current.next){
      current = current.next;
    }

    expect(current.data).toEqual(0);
    
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    LinkedListTest1.append(5);
    LinkedListTest1.append(6);
    LinkedListTest1.append(7);
    let currentNode = LinkedListTest1.head.next;

    while(currentNode.next){
      currentNode = currentNode.next;
    }
    expect(currentNode.data).toEqual(7);
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    LinkedListTest1.insertBefore(5, true);
    const result = LinkedListTest1.toString();
    expect(result).toEqual('{1} -> {3} -> {true} -> {5} -> {5} -> {6} -> {7} -> NULL');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    LinkedListTest1.insertBefore(1, 'head');
    const result = LinkedListTest1.toString();
    expect(result).toEqual('{head} -> {1} -> {3} -> {true} -> {5} -> {5} -> {6} -> {7} -> NULL');
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    LinkedListTest1.insertBefore(true, false);
    const result = LinkedListTest1.toString();
    expect(result).toEqual('{head} -> {1} -> {3} -> {false} -> {true} -> {5} -> {5} -> {6} -> {7} -> NULL');
  });

  xit('Can successfully insert a node after the last node of the linked list', () => {
    LinkedListTest1.insertBefore(7, 'tail');
    const result = LinkedListTest1.toString();
    expect(result).toEqual('{head} -> {1} -> {2} -> {3} -> {4} -> {true} -> {false} -> {5} -> {6} -> {7} -> {tail} -> NULL')
  });

  xit('Handles where K is greater than the length of the list', () => {
    const result = LinkedListTest1.kthFromEnd(100);
    expect(result).toEqual('null');
  });

  xit('Handles where K and length of the list are the same', () => {
    const result = LinkedListTest1.kthFromEnd(LinkedListTest1.length)
    expect(result).toEqual(LinkedListTest1.head.data);
  });

  xit('Handles where K is a negative number', () => {
    const result = LinkedListTest1.kthFromEnd(-1)
    expect(result).toEqual('null');
  });

  it('Zips two linked-list together', () => {

    const LinkedListTest1 = new LinkedList();
LinkedListTest1.insert(5);
LinkedListTest1.insert(3);
LinkedListTest1.insert(1);
// console.log(LinkedListTest1.toString());

const LinkedListTest2 = new LinkedList();
LinkedListTest2.insert(6);
LinkedListTest2.insert(4);
LinkedListTest2.insert(2);
// console.log(LinkedListTest2.toString());
LinkedListTest1.zipLists(LinkedListTest1, LinkedListTest2);
    expect(LinkedListTest1.head.next.data).toEqual(1);
    expect(LinkedListTest1.toString()).toEqual('{1} -> {2} -> {3} -> {4} -> {5} -> {6} -> NULL');
  });
});


