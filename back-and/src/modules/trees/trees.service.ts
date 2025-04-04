import { Injectable } from "@nestjs/common";

@Injectable()
export class TreesService {
  getBinarySearchTree() {
    // Simulação de resposta de uma BST
    return {
      type: "BST",
      nodes: [
        { value: 10, left: 5, right: 15 },
        { value: 5, left: null, right: null },
        { value: 15, left: null, right: null },
      ],
    };
  }
  getBTree() {
    return {
      type: "B-Tree",
      minDegree: 2,
      nodes: [
        { keys: [10, 20], children: [[5], [15], [25]] }
      ]
    };
  }
}
