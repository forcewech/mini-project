import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { Author } from "./entities/author.entity";

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>
  ) {}
  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const author = new Author(createAuthorDto);
    return await this.authorRepository.save(author);
  }

  async findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async findOne(id: number): Promise<Author> {
    return this.authorRepository.findOneBy({ id });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    await this.authorRepository.update(id, updateAuthorDto);
    return this.authorRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }
}
