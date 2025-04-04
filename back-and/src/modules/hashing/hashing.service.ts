import { Injectable } from "@nestjs/common";

@Injectable()
export class HashingService {
  getExampleData() {
    return { message: "Exemplo de dados de hashing" };
  }
}
