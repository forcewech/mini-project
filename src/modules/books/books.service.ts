import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { Book } from "./entities/book.entity";
import { BooksRepository } from "./books.repository";

@Injectable()
export class BooksService {
  constructor(private bookRepository: BooksRepository) {}
  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book(createBookDto);
    return await this.bookRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findOne(id: number): Promise<Book> {
    return this.bookRepository.findOneBy({ id });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    await this.bookRepository.update(id, updateBookDto);
    return this.bookRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
