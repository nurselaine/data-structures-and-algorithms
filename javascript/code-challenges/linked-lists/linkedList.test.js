'use strict';

const Node = require('./Node');
const LinkedList = require('./LinkedList');

// Can successfully instantiate an empty linked list
const LinkedListTest1 = new LinkedList();

describe('Linked List Classes', () => {
  it('Can properly insert into the linked list', () => {
    LinkedListTest1.insert(1);
    expect(LinkedListTest1.head.next).toEqual(7)
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    LinkedListTest1.insert(2);
    LinkedListTest1.insert(3);
    expect(LinkedListTest1.head.next).toEqual(2);
    expect(LinkedListTest1.head.next.next).toEqual(3);
  });
  it('The head property will properly point to the first node in the linked list', () => {
    expect(LinkedListTest1.head).toEqual(1)
  });
  it('Will return true when finding a value within the linked list that exists', () => {
    expect(LinkedListTest1.includes(2)).toBe(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(LinkedListTest1.includes('ten').toBe(false));
  });
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const result = LinkedListTest1.toString();
    expect(result).toEqual('{1} -> {2} -> {3} -> NULL');
  });

  it('Can successfully add a node to the end of the linked list', () => {
    LinkedListTest1.append(4);
    let currentNode = LinkedListTest1.head.next;

    while(currentNode.next){
      currentNode = currentNode.next;
    }
    expect(currentNode.data).toEqual(5);
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
    expect(result).toEqual('{1} -> {2} -> {3} -> {4} -> {true} => {5} -> {6} -> {7} -> NULL');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    LinkedListTest1.insertBefore(1, 'head');
    const result = LinkedListTest1.toString();
    expect(result).toEqual('{head} -> {1} -> {2} -> {3} -> {4} -> {true} => {5} -> {6} -> {7} -> NULL');
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    LinkedListTest1.insertBefore(true, false);
    const result = LinkedListTest1.toString();
    expect(result).toEqual('{head} -> {1} -> {2} -> {3} -> {4} -> {true} -> {false} -> {5} -> {6} -> {7} -> NULL');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    LinkedListTest1.insertBefore(7, 'tail');
    const result = LinkedListTest1.toString();
    expect(result).toEqual('{head} -> {1} -> {2} -> {3} -> {4} -> {true} -> {false} -> {5} -> {6} -> {7} -> {tail} -> NULL')
  });

  it('Handles where K is greater than the length of the list', () => {
    const result = LinkedListTest1.kthFromEnd(100);
    expect(result).toEqual('null');
  })

  it('Handles where K and length of the list are the same', () => {
    const result = LinkedListTest1.kthFromEnd(LinkedListTest1.length)
    expect(result).toEqual(LinkedListTest1.head.data);
  })

  it('Handles where K is a negative number', () => {
    const result = LinkedListTest1.kthFromEnd(-1)
    expect(result).toEqual('null');
  })
});


