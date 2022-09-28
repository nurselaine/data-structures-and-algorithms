'use strict';
const Node = require('./Node');

class LinkedList {

    constructor(head){
        this.head = new Node(-1, null);
        this.length = 0;
    }

     insert (value){
        // adds new node with the value to the head of the list
        const temp = this.head.next;
        let newNode = new Node(value, temp);
        this.head.next = newNode;
        newNode.next = temp;
        this.length++;
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
        if(this.head === null){
            return null;
        }
        
        let currentNode = this.head.next;
        let result = "";

        while(currentNode.next){
            console.log(currentNode);
            result += `{${currentNode.data}} -> `;
            currentNode = currentNode.next;
        }
        result += 'NULL';
        return result;
    }

    append(value){
    // adds a new node at the end of the list
    // console.log('helllo');
        let currentNode = this.head.next;

        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = new Node(value, null);
    }

    insertBefore(value, newValue){
    // adds node with given new value immediately before the first node that has specified value 
        let currentNode = this.head.next;
        let subList;
        if(value === currentNode.data){
            this.insert(newValue);
        }
        while(currentNode.next != null){
            if(currentNode.next.data === value){
                subList = currentNode.next;
                currentNode.next = new Node(newValue, null);
            }
            currentNode = currentNode.next;
        }
        currentNode.next = subList;
    }

    insertAfter(value, newValue){
    // ADDS NEW NODE WITH GIVEN NEW VALUE AFTER THE FIRST NODE THAT HAS VALUE SPECIFIED
        let currentNode = this.head.next;
        let subList;

        while(currentNode.next != null){
            if(currentNode.data === value){
                subList = currentNode.next;
                currentNode.next = new Node(newValue);
            }
            currentNode = currentNode.next;
        }

        currentNode.next = subList;
    }

    kthFromEnd(k){
    // returns the node's value that is K places from the tail of the linked list
        if(k > this.length || k < 0){
            return 'null';
        } else {
            let currentNode = this.head.next;
            let counter = 0;
    
            while(Math.abs(this.length - counter) >= k){
                if(Math.abs(this.length - counter) === k){
                    return currentNode.data;
                } else {
                    currentNode = currentNode.next;
                    counter++;
                }
                console.log(`currentNode ${currentNode}`);
            }
            return currentNode.data;
        }
    }
}

module.exports = LinkedList;