import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { AuthorsModule } from "./modules/authors/authors.module";
import { BooksModule } from "./modules/books/books.module";
import { UsersModule } from "./modules/users/users.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [AuthorsModule, BooksModule, UsersModule, AuthModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
