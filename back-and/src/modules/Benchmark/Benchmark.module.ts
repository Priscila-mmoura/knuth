import { Module } from '@nestjs/common';
import { BenchmarkService } from './Benchmark.service';
import { BenchmarkController } from './Benchmark.controller';

@Module({
  controllers: [BenchmarkController],
  providers: [BenchmarkService],
})
export class BenchmarkModule {}
