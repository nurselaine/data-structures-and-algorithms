const { Graph, businessTrip } = require('./Graph');

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

    let expectedResponse =  [{"vertex": {"value": "F"}, "weight": 0}, {"vertex": {"value": "H"}, "weight": 0}];
    let expectedResponse2 = [{"vertex": {"value": "E"}, "weight": 0}, {"vertex": {"value": "H"}, "weight": 0}];

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
    
    let expectedResponse = [{"vertex": {"value": "B"}, "weight": 0}, {"vertex": {"value": "C"}, "weight": 0}, {"vertex": {"value": "D"}, "weight": 0}];

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

  test('Breadth First Traversal returns a collection of nodes in the order they were visited', () => {
    let response = graph.breadthFirst(A);

    expect(response).toEqual(expect.arrayContaining(
      ['A', 'B', 'C',
      'D', 'G', 'H',
      'F', 'E']
    ));
    expect(response.length).toBe(8);
    expect(response[0]).toEqual('A');
  });

  test('Business Trips Returns Total Cost of planned trip', () => {
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    const D = graph.addVertex('D');
    const G = graph.addVertex('G');
    const H = graph.addVertex('H');

    graph.addEdge(A, B, 10);
    graph.addEdge(A, C, 14);
    graph.addEdge(A, D, 18);
    graph.addEdge(B, G, 4);
    graph.addEdge(C, H, 27);

    let result = businessTrip(graph, [A, D]);
    expect(result).toEqual(18);

    let result2 = businessTrip(graph, [A, C, H]);
    expect(result2).toEqual(41);

    let result3 = businessTrip(graph, [A, H]);
    expect(result3).toBe(null);

  });

  test('Depth First Traversal returns a collection of nodes in the order they were visited', () => {
    let response = graph.depthFirst(A);

    expect(response).toEqual(expect.arrayContaining(
      ['A', 'D', 'H',
      'F', 'E', 'C',
      'B', 'G']
    ));
    expect(response.length).toBe(8);
    expect(response[0]).toEqual('A');
  });
});