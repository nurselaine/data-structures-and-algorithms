# Tree Intersection

  Problem Domain: Write a function that takes two binary trees as parameters and use created Hashmap as within the algorithm. Return a set of values found in both trees

  Do not define a large algorithm in one function definition. Break down the problem into smaller problems

  Clarifying Questions
    - Can the tree have duplicate node values?
      - Assume all values are unique
    - Will the tree contain other primitive datatypes or whole, real numbers?

## Visual

          10                  12
        /    \              /    \    --> [11]
      [11]    2          [11]     4 
  Between these two trees, they share one common node with the value 11. This value will be added to an array and returned 

          10                  12
        /    \              /    \    
      [11]    2          [11]     4    --> [11, 28]
    /          \          /        
  [18]         [20]     [18]         

  Continuing off of the previous example, we have two larger trees. Between these two trees, they share the node value 11 and 18. Nodes that are shared will be pushed into an array and returned 


## Algorithm

  1. Use Depth-first-search algorithm to traverse the binary trees
  2. Instantiate a HashTable to keep track of all the values of the nodes for each tree traversal
  3. Use a helper function for tree traversal, within the function
    a. Use pre-order (traversing the Root -> Left -> right)
    b. check whether the node being passed into the helper function is included in the hashTable.
    c. If it is not then set a key/value pair for the node being traversed into the Hashtable
    d. If it is included in the hash table, add the node's value to an array
  4. Once the first tree has been called by the helper function, invoke the helper function with the second tree. At this point, the array should still be empty until the second tree traversal begins
  5. As the Second Tree is being traversed, each node value will be validated on whether the key is stored within the hash table. If it is, then the node's value will be added into the array. 
  6. Lastly, return the array in the main function. It should now include all of the nodes found in the first tree and second tree. 


    

