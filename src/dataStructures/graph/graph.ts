import { Queue } from "../queue";
import { Stack } from "../stack";

class Vertex {
  private value: number | string;
  private degree: number;
  private neighbors: Vertex[];

  constructor(value: number | string) {
    this.value = value;
    this.degree = 0;
    this.neighbors = [];
  }

  getValue() {
    return this.value;
  }

  setValue(value: number | string) {
    this.value = value;
  }

  getDegree() {
    return this.degree;
  }

  incrementDegree() {
    this.degree++;
  }

  decrementDegree() {
    if (this.degree > 0) {
      this.degree--;
    }
  }

  getNeighbors() {
    return this.neighbors;
  }

  addNeighbor(vertex: Vertex) {
    if (!this.neighbors.includes(vertex)) {
      this.neighbors.push(vertex);
      this.incrementDegree();
    }
  }

  removeNeighbor(vertex: Vertex) {
    const index = this.neighbors.indexOf(vertex);
    if (index !== -1) {
      this.neighbors.splice(index, 1);
      this.decrementDegree();
    }
  }
}

class Edge {
  private start: Vertex;
  private end: Vertex;
  private weight: number | null;

  constructor(start: Vertex, end: Vertex, weight: number | null = null) {
    this.start = start;
    this.end = end;
    this.weight = weight;
  }

  getStart() {
    return this.start;
  }

  setStart(vertex: Vertex) {
    this.start = vertex;
  }

  getEnd() {
    return this.end;
  }

  setEnd(vertex: Vertex) {
    this.end = vertex;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight: number | null) {
    this.weight = weight;
  }
}

export class Graph {
  private vertices: Vertex[];
  private edges: Edge[];
  private adjacencyList: Map<Vertex, Vertex[]>;

  constructor() {
    this.vertices = [];
    this.edges = [];
    this.adjacencyList = new Map();
  }

  /**
   * Adds a vertex to the graph.
   * @param value
   */
  addVertex(value: number | string) {
    const vertex = new Vertex(value);
    this.vertices.push(vertex);
    this.adjacencyList.set(vertex, []);
  }

  /**
   * Adds an edge between two vertices in the graph. If the vertices do not exist, they will not be added.
   * @param startValue
   * @param endValue
   * @param weight
   */
  addEdge(
    startValue: number | string,
    endValue: number | string,
    weight: number | null = null,
  ) {
    const startVertex = this.vertices.find((v) => v.getValue() === startValue);
    const endVertex = this.vertices.find((v) => v.getValue() === endValue);

    if (startVertex && endVertex) {
      const edge = new Edge(startVertex, endVertex, weight);
      this.edges.push(edge);
      startVertex.addNeighbor(endVertex);
      endVertex.addNeighbor(startVertex); // For undirected graph
      this.adjacencyList.get(startVertex)?.push(endVertex);
      this.adjacencyList.get(endVertex)?.push(startVertex); // For undirected graph
    }
  }

  getVertices() {
    return this.vertices;
  }

  getEdges() {
    return this.edges;
  }

  /**
   * Removes a vertex from the graph.
   * @param value
   */
  removeVertex(value: number | string) {
    const vertex = this.vertices.find((v) => v.getValue() === value);
    if (vertex) {
      this.vertices = this.vertices.filter((v) => v !== vertex);
      this.edges = this.edges.filter(
        (e) => e.getStart() !== vertex && e.getEnd() !== vertex,
      );
      this.adjacencyList.delete(vertex);
      for (const [v, neighbors] of this.adjacencyList) {
        this.adjacencyList.set(
          v,
          neighbors.filter((n) => n !== vertex),
        );
        v.removeNeighbor(vertex);
      }
    }
  }

  /**
   * Removes an edge between two vertices in the graph.
   * @param startValue
   * @param endValue
   */
  removeEdge(startValue: number | string, endValue: number | string) {
    const edgeIndex = this.edges.findIndex(
      (e) =>
        (e.getStart().getValue() === startValue &&
          e.getEnd().getValue() === endValue) ||
        (e.getStart().getValue() === endValue &&
          e.getEnd().getValue() === startValue),
    );
    if (edgeIndex !== -1) {
      const edge = this.edges[edgeIndex];
      this.edges.splice(edgeIndex, 1);
      edge.getStart().removeNeighbor(edge.getEnd());
      edge.getEnd().removeNeighbor(edge.getStart());
      this.adjacencyList.set(
        edge.getStart(),
        this.adjacencyList
          .get(edge.getStart())
          ?.filter((n) => n !== edge.getEnd()) || [],
      );
      this.adjacencyList.set(
        edge.getEnd(),
        this.adjacencyList
          .get(edge.getEnd())
          ?.filter((n) => n !== edge.getStart()) || [],
      );
    }
  }

  /**
   * Performs a breadth-first search (BFS) starting from the specified vertex value and returns an array of visited vertex values in the order they were visited.
   * @param startValue
   * @returns The list of visited vertex values in BFS order.
   */
  breadthFirstSearch(startValue: number | string) {
    const startVertex = this.vertices.find((v) => v.getValue() === startValue);
    if (!startVertex) return [];

    const visited: Set<Vertex> = new Set();
    const queue = new Queue();
    const result: (number | string)[] = [];

    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
      const vertex = queue.dequeue()!;
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex.getValue());
        const neighbors = this.adjacencyList.get(vertex);
        if (neighbors) {
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              queue.enqueue(neighbor);
            }
          }
        }
      }
    }

    return result;
  }

  /**
   * Performs a depth-first search (DFS) starting from the specified vertex value and returns an array of visited vertex values in the order they were visited.
   * @param startValue
   * @returns The list of visited vertex values in DFS order.
   */
  depthFirstSearch(startValue: number | string) {
    const startVertex = this.vertices.find((v) => v.getValue() === startValue);
    if (!startVertex) return [];

    const visited: Set<Vertex> = new Set();
    const stack = new Stack();
    const result: (number | string)[] = [];

    stack.push(startVertex);

    while (!stack.isEmpty()) {
      const vertex = stack.pop()!;
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex.getValue());
        const neighbors = this.adjacencyList.get(vertex);
        if (neighbors) {
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              stack.push(neighbor);
            }
          }
        }
      }
    }

    return result;
  }
}
