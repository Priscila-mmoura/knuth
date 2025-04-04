import { Controller, Get } from "@nestjs/common";
import { HashingService } from "./hashing.service";

@Controller("hashing")
export class HashingController {
  constructor(private readonly hashingService: HashingService) {}

  @Get()
  getHashingData(): any { 
    return this.hashingService.getExampleData();
  }
}
