import { Module } from "@nestjs/common";
import { AuthorsService } from "./authors.service";
import { AuthorsController } from "./authors.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Author } from "./entities/author.entity";
import { AuthorsRepository } from "./authors.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorsController],
  providers: [AuthorsService, AuthorsRepository]
})
export class AuthorsModule {}
