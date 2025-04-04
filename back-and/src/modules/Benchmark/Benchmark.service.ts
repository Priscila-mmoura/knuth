import { Injectable } from "@nestjs/common";

@Injectable()
export class BenchmarkService {
  runBenchmark() {
    // Simulação de benchmark comparando BST e Hashing
    return {
      testCase: "Operações de Inserção - 1000 Elementos",
      results: [
        { structure: "BST", timeMs: 120, memoryKb: 200 },
        { structure: "AVL Tree", timeMs: 90, memoryKb: 250 },
        { structure: "Hash Table", timeMs: 30, memoryKb: 180 },
      ],
    };
  }
}
