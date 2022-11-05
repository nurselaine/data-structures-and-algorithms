'use strict';

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
    let edges = this.adjacencyList.get(node).map((key) =>(
      {
        value: key.vertex.value,
        weight: key.weight,
      }
    ));
    return edges;
  }

  /**
   * 
   * @returns number representing # of vertexes in graph
   */
  size(){
    return this.size;
  }
  
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

graph.addEdge(A, B);
graph.addEdge(A, C);
graph.addEdge(A, D);
graph.addEdge(B, G);
graph.addEdge(C, H);
graph.addEdge(D, F);
graph.addEdge(D, H);
graph.addEdge(F, E);
graph.addEdge(F, H);


// console.log(graph.getNeighbors(A));

module.exports = { Graph, Vertex, Edge };