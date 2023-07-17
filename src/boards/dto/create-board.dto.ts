import { IsNotEmpty, Length, MaxLength } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty()
    @Length(2, 32)
    title: string;

    @IsNotEmpty()
    description: string;
}
