import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { AuthorsService } from "./authors.service";
import { Author } from "./entities/author.entity";

@Controller("authors")
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  create(@Body() author: Author) {
    return this.authorsService.create(author);
  }

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(":authorId")
  findOne(@Param("authorId") id: string) {
    return this.authorsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() author: Author) {
    return this.authorsService.update(+id, author);
  }

  @Delete(":authorId")
  remove(@Param("authorId") id: string) {
    return this.authorsService.remove(+id);
  }
}
