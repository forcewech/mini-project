import { Injectable } from "@nestjs/common";
import { Repository, DataSource } from "typeorm";
import { Author } from "./entities/author.entity";

@Injectable()
export class AuthorsRepository extends Repository<Author> {
  constructor(private dataSource: DataSource) {
    super(Author, dataSource.createEntityManager());
  }
}
