import { Controller, Get } from "@nestjs/common";
import { BenchmarkService } from "./Benchmark.service";

@Controller("benchmark")
export class BenchmarkController {
  constructor(private readonly benchmarkService: BenchmarkService) {}

  @Get()
  getBenchmark() {
    return this.benchmarkService.getSampleBenchmark();
  }
}
  