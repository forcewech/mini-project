import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  constructor(author: Partial<Author>) {
    Object.assign(this, author);
  }
}
