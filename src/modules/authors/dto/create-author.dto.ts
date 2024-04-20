import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAuthorDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;
}
