import { Module } from '@nestjs/common';
import { LinkedListsService } from './linkedlists.service';
import { LinkedListsController } from './linkedlists.controller';

@Module({
  controllers: [LinkedListsController],
  providers: [LinkedListsService],
})
export class LinkedListsModule {}
