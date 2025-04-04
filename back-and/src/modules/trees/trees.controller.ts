import { Controller, Get } from "@nestjs/common";
import { TreesService } from "./trees.service";

@Controller("trees")
export class TreesController {
  constructor(private readonly treesService: TreesService) {}

  @Get("bst") // por exemplo, rota para BST
  getBST() {
    return this.treesService.getBinarySearchTree();
  }
  @Get("btree")
getBTree() {
  return this.treesService.getBTree();
}

}
