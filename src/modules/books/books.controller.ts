import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards } from "@nestjs/common";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { Book } from "./entities/book.entity";
import { AuthGuard } from "../auth/auth.guard";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id", ParseIntPipe) id: number): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard)
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateBookDto: UpdateBookDto): Promise<Book> {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard)
  async remove(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.booksService.remove(id);
  }
}
