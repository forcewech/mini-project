import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from "@nestjs/common";
import { AuthorsService } from "./authors.service";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { Author } from "./entities/author.entity";
import { AuthGuard } from "../auth/auth.guard";

@Controller("authors")
@UseGuards(AuthGuard)
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<Author> {
    return this.authorsService.findOne(id);
  }

  @Patch(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    return this.authorsService.update(id, updateAuthorDto);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.authorsService.remove(id);
  }
}
