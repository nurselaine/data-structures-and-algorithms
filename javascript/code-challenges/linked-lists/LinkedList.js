'use strict';
const Node = require('./Node');

class LinkedList {

    constructor(head){
        this.head = new Node(-1, null);
        // this.next = null;
    }

     insert (value){
        // adds new node with the value to the head of the list
        const temp = this.head.next;
        let newNode = new Node(value);
        this.head.next = newNode;
        newNode.next = temp;
    }

    includes(value){
        // indicates whether the value exists as a node's value somewhere in the list
        let currentNode = this.head.next; // this.head is a pointer to the first node

        while(currentNode.next != null){
            if(currentNode.data === value){
                return true;
            } else {
                currentNode = currentNode.next;
            }
        }
        return currentNode.data === value;
        
    }

    toString(){
        // prints a string represenations of the values in a linked list
        let currentNode = this.head.next;
        let result = "";

        while(currentNode !== null){
            result += `{${currentNode.data}} -> `;
            currentNode = currentNode.next;
        }
        result += 'NULL';
        return result;
    }
}

module.exports = LinkedList;