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
      console.log(`peek ${JSON.stringify(this.top.value)}`);
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
    console.log(`dequeued node ${JSON.stringify(current.value)}`)
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
      return this.front.value;
    }
  }

  isEmpty() {
    // Returns: Boolean indicating whether or not the queue is empty
    return this.front === null;
  }
}

/*
Create a new class called pseudo queue.
Do not use an existing Queue.
Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
Internally, utilize 2 Stack instances to create and manage the queue

enqueue
Arguments: value
Inserts value into the PseudoQueue, using a first-in, first-out approach.
dequeue
Arguments: none
Extracts a value from the PseudoQueue, using a first-in, first-out approach.
*/ 

class PseudoQueue {
  
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    // adding to stack 1
    this.stack1.push(value);
  }

  dequeue(){
    // stack 2 will be the reverse of stack 1 and that will remove the first node from stack 1
    while(!this.stack1.isEmpty()){
      // do this until stack 1 is empty
      this.stack2.push(this.stack1.pop());
    }
    // now stack2 has all of stack 1's nodes but in reverse order
    const poppedNode = this.stack2.pop();
    while(!this.stack2.isEmpty()){
      this.stack1.push(this.stack2.pop());
    }

    return poppedNode;

  }
}

class AnimalShelter {
  constructor(){
    this.dogQueue = new Queue();
    this.catQueue = new Queue();
    this.counter = 0;
    this.dogLength = 0;
    this.catLength = 0;
  }

  enqueue(animal){
    // if(animal.name !== 'dog' || animal.name !== 'cat'){
    //   throw Error('This Shelter only take dogs/cats!');
    // }
    animal.count = this.counter++;
    if(animal.name === 'dog'){
      this.dogQueue.enqueue(animal);
      this.dogLength++;
    }

    if(animal.name === 'cat'){
      this.catQueue.enqueue(animal);
      this.catLength++;
    }
  }

  animalDequeue(pref){

    if(pref === 'dog'){
      console.log('dequeuing dog');
      return this.dogQueue.dequeue();
    } else if(pref === 'cat'){
      console.log('dequeuing cat');
      return this.catQueue.dequeue();
    } else {
      
      return this.dogQueue.peek().count < this.catQueue.peek().count 
      ? this.dogQueue.dequeue()
      : this.catQueue.dequeue();
    }
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
  PseudoQueue,
  AnimalShelter
}