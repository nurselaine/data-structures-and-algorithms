## Challenge

    Create a node class that has properties for the value stored in the Node and a pointer to the next Node. Create a Linked List class that has properties for a head Node. The Linked List class should create an empty linked list upon instantiation. Inside the Linked List class, create a method called insert, includes, and toString.

## Approach & Efficiency

    Linked list are efficient for inserting when inserting to the front or end of a list is required. Because linked list are made up of Nodes, it is important to include a Node class to instantiate new Nodes. Within the Linked List class, the Node class can be further manipulated by assigning pointers to new Nodes. 

## API

    Insert: Using a temporary variable to store the head's Node, variable reassignment of inserting a new Node can be performed with O(1) time complexity. 

    includes: Time complexity of this would be O(N) - worse case scenario - because this methods required iterating through the linked list until a matching node is found. 

    toString: Performed with O(N) time complexity because string generation requires linked list iteration.