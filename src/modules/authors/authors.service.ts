import { Injectable } from "@nestjs/common";
import { CreateAuthorDto } from "./dto/create-author.dto";
import { UpdateAuthorDto } from "./dto/update-author.dto";
import { EntityManager, Repository } from "typeorm";
import { Author } from "./entities/author.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
    private readonly entityManager: EntityManager
  ) {}
  async create(createAuthorDto: CreateAuthorDto) {
    const author = new Author(createAuthorDto);
    await this.entityManager.save(author);
  }

  async findAll() {
    return this.authorRepository.find();
  }

  async findOne(id: number) {
    return this.authorRepository.findOneBy({ id });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto) {
    const author = await this.authorRepository.findOneBy({ id });
    return await this.authorRepository.save({
      ...author,
      ...updateAuthorDto
    });
  }

  async remove(id: number) {
    await this.authorRepository.delete(id);
  }
}
