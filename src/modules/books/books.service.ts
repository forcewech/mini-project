import { Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "./entities/book.entity";
import { EntityManager, Repository } from "typeorm";

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    private readonly entityManager: EntityManager
  ) {}
  async create(createBookDto: CreateBookDto) {
    const book = new Book(createBookDto);
    await this.entityManager.save(book);
  }

  async findAll() {
    return this.bookRepository.find();
  }

  async findOne(id: number) {
    return this.bookRepository.findOneBy({ id });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const book = await this.bookRepository.findOneBy({ id });
    return await this.bookRepository.save({
      ...book,
      ...updateBookDto
    });
  }

  async remove(id: number) {
    await this.bookRepository.delete(id);
  }
}
