import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  publish: string;

  @Column()
  price: number;

  constructor(book: Partial<Book>) {
    Object.assign(this, book);
  }
}
