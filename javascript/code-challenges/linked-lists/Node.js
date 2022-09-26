'use strict';

class Node{
    constructor(value, pointer){
        this.data = value;

        if (pointer !== null) {
          this.next = pointer;
        } else {
          this.next = null;
        }
    }

    createNode(value){
        return {
            data: value,
            next: null,
        }
    }
}

module.exports = Node;