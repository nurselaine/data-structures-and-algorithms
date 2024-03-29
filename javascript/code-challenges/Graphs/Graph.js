'use strict';

const { Queue, Stack } = require('../stacksQueues/stackNQueues');

class Vertex {
  constructor(value){
    this.value = value;
  }
};

class Edge {
  constructor(vertex, weight = 0){ // is the = 0 implicit? do i need that there
    this.vertex = vertex;
    this.weight = weight;
  }
};

class Graph{
  constructor(){
    this.adjacencyList = new Map();
    this.length = 0;
  }

  /**
   * 
   * @param {*} value 
   * @returns 
   */
  addVertex(value){
    let newNode = new Vertex(value);
    if(this.adjacencyList.has(newNode)){
      throw new Exception('Value exist in graph');
    } 
    this.adjacencyList.set(newNode, []);
    this.length++;
    return newNode;
  };

  /**
   * 
   * @param {*} startNode 
   * @param {*} endNode 
   */
  addEdge(startNode, endNode, weight){
    if(this.adjacencyList.has(startNode) && this.adjacencyList.has(endNode)){
      let neighbors = this.adjacencyList.get(startNode);
      neighbors.push(new Edge(endNode, weight));
    };
  };

  /**
   * 
   * @returns collection of vertexes in graph
   */
  getNodes(){
    let results = [];
    this.adjacencyList.forEach((key, value) => results.push(value.value));
    return results;
  }

  /**
   * 
   * @param {*} node 
   * @returns 
   */
  getNeighbors(node){
    // console.log('neighbors method', this.adjacencyList.get(node));
    // console.log(this.adjacencyList);
    // let edges = this.adjacencyList.get(node).map((key) =>(
    //   {
    //     value: key.vertex.value,
    //     weight: key.weight,
    //   }
    // ));
    return this.adjacencyList.get(node);
  }

  /**
   * 
   * @returns number representing # of vertexes in graph
   */
  size(){
    return this.length;
  }

  depthFirst(root, cb){

    let stack = new Stack();
    let visited = new Set();
    let returnArray = [];
    stack.push(root);
    visited.add(root);

    while(!stack.isEmpty()){
      const curr = stack.pop();
      returnArray.push(curr.value);
      // console.log(curr.value);
      if(cb) { cb(curr) };

      let neighbors = this.getNeighbors(curr);
      for(let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return returnArray;
  }

  breadthFirst(node){
    let queue = new Queue();
    let visited = new Set();
    let returnArray = [];
    queue.enqueue(node);
    visited.add(node);

    while(!queue.isEmpty()){
      let currentNode = queue.dequeue();
      // console.log('----------',currentNode);
      returnArray.push(currentNode.value);
      let neighbors = this.getNeighbors(currentNode); // this will return [] with node's neighbors
        
      for(let i = 0; i < neighbors.length; i++){
        if(!visited.has(neighbors[i].vertex)){
          visited.add(neighbors[i].vertex);
          queue.enqueue(neighbors[i].vertex);
        }
      }
    }
    return returnArray;
  };

  // define a new method that accepts two nodes as input and uses your traversal algorithm to determine if a path exists between the two nodes.
  
}

// build a graph
const graph = new Graph();

const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');
const F = graph.addVertex('F');
const G = graph.addVertex('G');
const H = graph.addVertex('H');

graph.addEdge(A, B, 10);
graph.addEdge(A, C, 14);
graph.addEdge(A, D, 18);
graph.addEdge(B, G, 4);
graph.addEdge(C, H, 27);
graph.addEdge(D, F);
graph.addEdge(D, H);
graph.addEdge(F, E);
graph.addEdge(F, H);

// console.log(graph.depthFirst(A));


function businessTrip(graph, array){
  // Determine if the first and second values in the array are neighbors
  let start = 0;
  let j = start + 1;
  let tripTotal = 0;

  while(start < array.length - 1 && array[j] !== null){
    let neighbors = graph.getNeighbors(array[start]);
    let next = neighbors.filter(edge => edge.vertex === array[j]);
    if(neighbors.includes(next[0])){
      tripTotal += next[0].weight;
    };
    start++;
    j++;
  }
  return tripTotal > 0 ? tripTotal : null;
};

module.exports = { Graph, Vertex, Edge, businessTrip };