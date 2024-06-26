import { Injectable } from "@nestjs/common";
import { Repository, DataSource } from "typeorm";
import { Book } from "./entities/book.entity";

@Injectable()
export class BooksRepository extends Repository<Book> {
  constructor(private dataSource: DataSource) {
    super(Book, dataSource.createEntityManager());
  }
}
