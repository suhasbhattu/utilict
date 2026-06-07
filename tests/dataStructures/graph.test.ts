import { describe, expect, test } from "@jest/globals";
import { Graph } from "../../src";

describe("Graph", () => {
  test("Graph Operations", () => {
    const graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addEdge(1, 2, 5);
    graph.addEdge(1, 3, 10);
    graph.addEdge(2, 3, 15);
    const vertices = graph.getVertices().map((v) => v.getValue());
    expect(vertices).toEqual([1, 2, 3]);
    const neighborsOf1 = graph
      .getVertices()[0]
      .getNeighbors()
      .map((v) => v.getValue());
    expect(neighborsOf1).toEqual([2, 3]);
    graph.getVertices()[0].setValue(4);
    const updatedVertices = graph.getVertices().map((v) => v.getValue());
    expect(updatedVertices).toEqual([4, 2, 3]);
    expect(graph.getVertices()[0].getDegree()).toBe(2);
    graph.removeVertex(4);
    expect(graph.getVertices().map((v) => v.getValue())).toEqual([2, 3]);
    expect(graph.getVertices()[0].getDegree()).toBe(1);
    graph.removeEdge(2, 3);
    expect(graph.getVertices()[0].getDegree()).toBe(0);
    graph.addVertex(5);
    graph.addEdge(2, 5);
    graph.addEdge(2, 3);
    expect(graph.getVertices()[0].getDegree()).toBe(2);
    graph.getEdges()[0].setStart(graph.getVertices()[1]);
    expect(graph.getEdges()[0].getStart().getValue()).toBe(3);
    graph.getEdges()[1].setEnd(graph.getVertices()[0]);
    expect(graph.getEdges()[1].getEnd().getValue()).toBe(2);
    graph.getEdges()[0].setWeight(20);
    expect(graph.getEdges()[0].getWeight()).toBe(20);
    graph.removeEdge(3, 2);
    expect(graph.getVertices()[0].getDegree()).toBe(2);
    const graph2 = new Graph();
    graph2.addVertex("A");
    graph2.addVertex("B");
    graph2.addVertex("C");
    graph2.addVertex("D");
    graph2.addVertex("E");
    graph2.addVertex("F");
    graph2.addVertex("G");
    graph2.addVertex("H");
    graph2.addVertex("I");
    graph2.addVertex("J");
    graph2.addEdge("A", "B");
    graph2.addEdge("A", "C");
    graph2.addEdge("A", "D");
    graph2.addEdge("A", "E");
    graph2.addEdge("B", "C");
    graph2.addEdge("B", "F");
    graph2.addEdge("B", "G");
    graph2.addEdge("C", "D");
    graph2.addEdge("C", "G");
    graph2.addEdge("D", "H");
    graph2.addEdge("D", "I");
    graph2.addEdge("E", "A");
    graph2.addEdge("E", "F");
    graph2.addEdge("E", "I");
    graph2.addEdge("F", "G");
    graph2.addEdge("F", "H");
    graph2.addEdge("G", "D");
    graph2.addEdge("G", "J");
    graph2.addEdge("H", "C");
    graph2.addEdge("H", "J");
    graph2.addEdge("I", "F");
    graph2.addEdge("I", "J");
    graph2.addEdge("J", "E");
    graph2.addEdge("J", "H");
    graph2.addEdge("J", "I");
    let bfsResult = graph2.breadthFirstSearch("A");
    expect(bfsResult).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
    ]);
    let dfsResult = graph2.depthFirstSearch("A");
    expect(dfsResult).toEqual([
      "A",
      "E",
      "J",
      "I",
      "F",
      "H",
      "C",
      "G",
      "D",
      "B",
    ]);
    bfsResult = graph2.breadthFirstSearch("Z");
    expect(bfsResult).toEqual([]);
    dfsResult = graph2.depthFirstSearch("Z");
    expect(dfsResult).toEqual([]);
  });
});
