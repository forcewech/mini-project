import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  publish: string;

  @IsNotEmpty()
  @IsInt()
  price: number;
}
