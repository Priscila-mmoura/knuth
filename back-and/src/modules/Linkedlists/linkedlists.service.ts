import { Injectable } from "@nestjs/common";

@Injectable()
export class LinkedListsService {
  getExampleList() {
    // Simulação de uma lista encadeada simples
    return {
      type: "SinglyLinkedList",
      nodes: [
        { value: 1, next: 2 },
        { value: 2, next: 3 },
        { value: 3, next: null },
      ],
    };
  }
}
