import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthorsModule } from "./modules/authors/authors.module";
import { BooksModule } from "./modules/books/books.module";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthorsModule, BooksModule, UsersModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
