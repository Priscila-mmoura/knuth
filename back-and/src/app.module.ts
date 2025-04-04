import { Module } from "@nestjs/common";
import { TreesModule } from "./Modules/Trees/trees.module";
import { LinkedListsModule } from "./Modules/Linkedlists/linkedlists.module";
import { HashingModule } from "./Modules/Hashing/hashing.module";


@Module({
  imports: [TreesModule, LinkedListsModule, HashingModule], // Mantemos todos os módulos aqui
})
export class AppModule {}
