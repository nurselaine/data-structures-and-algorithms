'use strict';

const { Stack, Queue, PseudoQueue, AnimalShelter } = require('./stackNQueues');

const stackTest1 = new Stack();
const queueTest1 = new Queue();

const pseudoQueueTest1 = new PseudoQueue();
const animalShelterTest1 = new AnimalShelter();

const dogObj = {name: 'dog'};
const catObj = {name: 'cat'};

const validateBrackets = (string) => {
  if(typeof(string) !== 'string' || string === null){
    return console.log('Please provide valid string');
  }
    let openStack = new Stack();
    let closeStack = new Stack();

    for(let i = 0; i < string.length; i ++){
      if(string.charAt(i) === '(' || string.charAt(i) === '[' || string.charAt(i) === '{'){
        openStack.push(string.charAt(i));
      }
      if(string.charAt(i) === ')' || string.charAt(i) === ']' || string.charAt(i) === '}' ){
        closeStack.push(string.charAt(i));
      }
    }

    while(!openStack.isEmpty()){
      let openBrac = openStack.pop();
      let closeBrac = closeStack.pop();
      if(openBrac !== closeBrac){
        return false;
      }
    }
    return closeStack.isEmpty() ? true : false;


}

// animalShelterTest1.enqueue(dogObj); // 1 
// animalShelterTest1.enqueue(catObj); // 2
// animalShelterTest1.enqueue(dogObj); // 3
// console.log(animalShelterTest1);

// animalShelterTest1.dequeue('dog');
// console.log(animalShelterTest1);
// animalShelterTest1.dequeue('null');

describe('Stacks & Queue Validation', () => {
  it('Can successfully push onto a stack', () => {
    stackTest1.push(1);
    expect(stackTest1.length).toBe(1);
    expect(stackTest1.isEmpty()).not.toBeTruthy();
    expect(stackTest1.peek()).toEqual(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    stackTest1.push(2);
    stackTest1.push(3);
    stackTest1.push('four');
    expect(stackTest1.length).toBe(4);
    expect(stackTest1.isEmpty()).not.toBeTruthy();
  });

  it('Can successfully pop off the stack', () => {
    const response = stackTest1.pop();

    expect(response).toEqual('four');
    expect(stackTest1.length).toBe(3);
    expect(stackTest1.isEmpty()).not.toBeTruthy();
  });

  it('Can successfully empty a stack after multiple pops', () => {
    stackTest1.pop();
    stackTest1.pop();
    stackTest1.pop();
    let response = stackTest1.pop();
    expect(response).toEqual(null);
    expect(stackTest1.length).toBe(0);
    expect(stackTest1.isEmpty()).toBeTruthy();
  });

  it('Can successfully peek the next item on the stack', () => {
    stackTest1.push(1);
    stackTest1.push(3);
    stackTest1.push(5);
    let response = stackTest1.peek();

    expect(response).toEqual(5);
  });

  it('Can successfully instantiate an empty stack', () => {
    let newStack = new Stack();

    expect(newStack).toBeTruthy();
    expect(newStack.isEmpty()).toBeTruthy();
  });

  it('Can successfully instantiate an empty queue', () => {
    let newQueue = new Queue();

    expect(newQueue.isEmpty()).toBeTruthy();
    expect(newQueue).toBeTruthy();
  });

  it('Can successfully enqueue into a queue', () => {
    queueTest1.enqueue(1);

    expect(queueTest1.isEmpty()).not.toBeTruthy();
    expect(queueTest1.peek()).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queueTest1.enqueue(2);
    queueTest1.enqueue(3);
    queueTest1.enqueue('four');

    expect(queueTest1.isEmpty()).not.toBeTruthy();
    expect(queueTest1.peek()).toEqual(1);
    expect(queueTest1.back.value).toEqual('four');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let response = queueTest1.dequeue();

    expect(response).toEqual(1);
    expect(queueTest1.isEmpty()).not.toBeTruthy();
    expect(queueTest1.peek()).toEqual(2);
    expect(queueTest1.back.value).toEqual('four');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let response = queueTest1.peek();

    expect(response).toEqual(2);
    expect(queueTest1.front.value).toEqual(2);
    expect(queueTest1.back.value).toEqual('four');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let response1 = queueTest1.dequeue();
    let response2 = queueTest1.dequeue();
    let response3 = queueTest1.dequeue();

    expect(response1).toEqual(2);
    expect(response2).toEqual(3);
    expect(response3).toEqual('four');
    expect(queueTest1.isEmpty()).not.toBeFalsy();
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {

    expect(queueTest1.peek()).toThrowError();
    expect(queueTest1.dequeue()).toThrow();
    expect(queueTest1.isEmpty()).not.toBeFalsy();
  });

  it('Can successfully instantiate an empty pseudoQueue', () => {
    let pseudoQ = new PseudoQueue();

    expect(pseudoQ).toBeTruthy();
  });

  it('Can successfully enqueue into a pseudo queue', () => {
    pseudoQueueTest1.enqueue(1);
    // console.log(pseudoQueueTest1)
    expect(pseudoQueueTest1.dequeue()).toEqual(1);
    expect(pseudoQueueTest1).toBeTruthy();
    // console.log(pseudoQueueTest1)
  });

  it('Can successfully enqueue multiple nodes into a pseudo queue', () => {
    pseudoQueueTest1.enqueue(2);
    pseudoQueueTest1.enqueue(3);
    pseudoQueueTest1.enqueue(4);
    // console.log(pseudoQueueTest1)
    expect(pseudoQueueTest1.dequeue()).toEqual(2);
    expect(pseudoQueueTest1).toBeTruthy();
    // console.log(pseudoQueueTest1)
  });

  it('Can successfully dequeue into a pseudo queue', () => {
    pseudoQueueTest1.dequeue();

    expect(pseudoQueueTest1.dequeue()).toEqual(4);
    expect(pseudoQueueTest1).toBeTruthy();
  });

  it('Can successfully instantiate an empty AnimalShelter queue', () => {
    let animalShelter = new AnimalShelter();

    expect(animalShelter).toBeTruthy();
  });

  it('Can successfully enqueue into a animalShelter queue', () => {
    animalShelterTest1.enqueue(dogObj);
    animalShelterTest1.enqueue(catObj);
    animalShelterTest1.enqueue(catObj);
    // console.log(pseudoQueueTest1)
    expect(animalShelterTest1.dogQueue).toBeTruthy();
    expect(animalShelterTest1.dogQueue.peek().name).toBe('dog');
    expect(animalShelterTest1.catQueue).toBeTruthy();
    expect(animalShelterTest1.catQueue.peek().name).toEqual('cat');
    // console.log(pseudoQueueTest1)
  });

  it('Can successfully dequeue into a animalShelter queue', () => {
    let animalShelterQueue = new AnimalShelter();
    animalShelterQueue.enqueue(dogObj);
    animalShelterQueue.enqueue(dogObj);
    animalShelterQueue.enqueue(catObj);
    animalShelterQueue.enqueue(catObj);
    animalShelterQueue.enqueue(dogObj);
    console.log(`animalShelterQueue ${JSON.stringify(animalShelterQueue)}`);
    
    // console.log(animalShelterQueue.dequeue('dog'));
    const response1 = animalShelterQueue.animalDequeue('dog');
    console.log('response 1', JSON.stringify(response1));
    const response2 = animalShelterQueue.animalDequeue('cat');
    const response3 = animalShelterQueue.animalDequeue('bird');
    // console.


    expect(response1.name).toEqual('dog');
    expect(response2.name).toEqual('cat');
    expect(response3.count).toEqual(3);
  });
})

// queueTest1.enqueue(1);
// queueTest1.enqueue(2);
// queueTest1.enqueue(3);
// console.log(queueTest1.length);
// queueTest1.dequeue();
// console.log(queueTest1.length);
// queueTest1.peek();
// console.log(queueTest1.isEmpty());