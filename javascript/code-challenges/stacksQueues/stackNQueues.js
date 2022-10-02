'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    // adds a new node with that value to the top of the stack
    if (!this.top) {
      this.top = new Node(value);
    } else {
      let current = this.top;
      let newNode = new Node(value);
      newNode.next = current;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    // Returns: the value from node from the top of the stack
    if (this.top) {
      let temp = this.top;
      this.top = this.top.next;
      this.length--;
      // console.log(`temp value ${temp.value}`);
      return temp.value;
    } else {
      return null;
    }
  }

  peek() {
    // Returns: Value of the node located at the top of the stack
    if (this.top) {
      console.log(`peek ${this.top.value}`);
      return this.top.value;
    }
    return null;
  }

  isEmpty() {
    // Returns: Boolean indicating whether or not the stack is empty. 
    return this.top === null;
  }

}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    // adds a new node with that value to the back of the queue
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;

    // if(this.front){
    //   let current = new Node(value);
    //   let temp = this.front;

    //   while(temp.next){
    //     temp = temp.next;
    //   }
    //   temp.next = current;
    // } else {
    //   this.front = new Node(value);
    // }
    this.length++;
  }

  dequeue() {
    // Returns: the value from node from the front of the queue
    // Should raise exception when called on empty queue
    if (!this.front) {
      throw 'TypeError: Unable to read Undefined';
    }

    let current = this.front;
    this.front = this.front.next;
    // console.log(`new front ${this.front.value}`);
    this.length--;
    return current.value;
  }

  peek() {
    // Returns: Value of the node located at the front of the queue
    if (!this.front) {
      throw 'TypeError: Unable to read Undefined';
    }

    if (this.front) {
      console.log(`peek ${this.front.value}`);
      return this.front.value;
    }
  }

  isEmpty() {
    // Returns: Boolean indicating whether or not the queue is empty
    return this.front === null;
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
}