import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { Repository, DataSource } from "typeorm";

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
}
