import { Controller, Get } from "@nestjs/common";
import { LinkedListsService } from "./linkedlists.service";

@Controller("linkedlists")
export class LinkedListsController {
  constructor(private readonly linkedListsService: LinkedListsService) {}

  @Get()
  getLinkedList() {
    return this.linkedListsService.getExampleList();
  }
}
