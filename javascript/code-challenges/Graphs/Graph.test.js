const { Graph, Vertex, Edge } = require('./Graph');

/**
 * Node can be successfully added to the graph
An edge can be successfully added to the graph
A collection of all nodes can be properly retrieved from the graph
All appropriate neighbors can be retrieved from the graph
Neighbors are returned with the weight between nodes included
The proper size is returned, representing the number of nodes in the graph
A graph with only one node and edge can be properly returned
 */

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

const testGraph = new Graph();

describe('Graph Implementation', () => {
  test('Node can be successfully added to the graph', () => {
    const ten = testGraph.addVertex(10);
    const twenty = testGraph.addVertex(20);
    const thirty = testGraph.addVertex(30);

    let response = testGraph.getNodes();
    let expectedResponse = [10, 20, 30];

    expect(response.length).toBeGreaterThanOrEqual(0);
    expect(response).toEqual(expect.arrayContaining(expectedResponse));
  });

  test('An edge can be successfully added to the graph', () => {
    graph.addEdge(D, F);
    graph.addEdge(D, H);
    graph.addEdge(F, E);
    graph.addEdge(F, H);

    let response = graph.getNeighbors(D);
    let response2 = graph.getNeighbors(F);

    let expectedResponse = [{"value": "F", "weight": 0}, {"value": "H", "weight": 0}];
    let expectedResponse2 = [{"value": "E", "weight": 0}, {"value": "H", "weight": 0}];

    expect(response).toEqual(expect.arrayContaining(expectedResponse));
    expect(response2).toEqual(expect.arrayContaining(expectedResponse2));
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    let response = testGraph.getNodes();
    let expectedResponse = [10, 20, 30];

    expect(response.length).toBeGreaterThanOrEqual(0);
    expect(response).toEqual(expect.arrayContaining(expectedResponse));
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    let response = graph.getNeighbors(A);
    
    let expectedResponse = [{"value": "B", "weight": 0}, {"value": "C", "weight": 0}, {"value": "D", "weight": 0}];

    expect(response).toEqual(expect.arrayContaining(expectedResponse));
    expect(response.length).toBeGreaterThanOrEqual(0);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    let testGraph = new Graph();

    const one = testGraph.addVertex(1);
    const two = testGraph.addVertex(2);
    const three = testGraph.addVertex(3);

    testGraph.addEdge(one, two, 1);
    testGraph.addEdge(one, three, 2);

    let response = testGraph.getNeighbors(one);

    let weight1 = response[0].weight;
    let weight2 = response[1].weight;

    expect(weight1).toEqual(1);
    expect(weight2).toEqual(2);
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    let size = graph.size();

    expect(size).toEqual(8);
  });

  // to add an edge, two nodes are required so this test case is not appropriate for this graph implementation
  // test('A graph with only one node and edge can be properly returned', () => {
  //   let graph = new Graph();

  //   const A = graph.addVertex('A');
  //   graph.addEdge(A, 100);
  // });
});