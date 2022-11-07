# Graph Implementation

  Implementing a graph and representing the graph as an adjacency list

## API

  1. addVertex: Add a node to the graph
  - Arguments: value
  - Returns: The added node
  - Time efficiency: O(1), utilizing Map object to insert a vertex into a list
  - Space efficiency: O(N), a vertex is created for each input
  
  2. addEdge: Adds a new edge between two nodes in the graph. If specified, assign a weight to the edge. Both nodes should already be in the Graph
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Efficiency: O(1), validation of the give nodes take O(1) using the Map object and adding an edge takes O(N) space because an edge is created 

  3. getNodes: Traverses the graph to return a collection (set, list, or similar). Empty collection returned if there are no nodes
  - Arguments: none
  - Returns all of the nodes in the graph
  - Efficiency: O(N), traversal of adjacency list is done once and space efficiency is O(N) as a collection representing the nodes in the graph

  4. get neighbors: Includes the weight of the connection in the returned collection. Empty collection returned if there are no nodes
  - Arguments: node
  - Returns a collection of edges connected to the given node
  - Efficiency: O(N) traversal through the given node's children while space efficiency is O(N) because an array the size of the given node's children is returned
  
  5. size: Returns the total number of nodes in the graph. 0 if there are none
  - Arguments: none
  - Returns number representing total nodes in graph
  - Efficiency: O(1) because a length property within the graph class is being returned while space is also O(1)

  6. depthFirst:

  7. breadthFirst: Traverses the graph in the order of a starting node then it's neighbor nodes
    - Arguments: starting vertex
    - return: A collection of nodes in the order they were visited
    - Efficiency: Worst case is O(N^N) when traversing a connected graph. Traverse each node of the tree and traverse each edge for each vertex N times
    - Space efficiency: O(N), a Set is returned that includes all the graph's vertexes 

