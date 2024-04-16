import { Injectable } from "@nestjs/common";
import { Author } from "./entities/author.entity";

@Injectable()
export class AuthorsService {
  private authors: Author[] = [];
  create(author: Author) {
    this.authors.push(author);
    return author;
  }

  findAll(): Author[] {
    return this.authors;
  }

  findOne(id: number) {
    return this.authors.find((item) => {
      return item.authorId === id;
    });
  }

  update(id: number, author: Author) {
    this.authors = this.authors.map((item) => {
      if (item.authorId === id) {
        return { ...item, ...author };
      }
    });
    return this.authors;
  }

  remove(id: number) {
    this.authors = this.authors.filter((item) => {
      return item.authorId !== id;
    });
  }
}
