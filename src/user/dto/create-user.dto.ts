import { IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @Length(2, 10)
    username: string;

    @IsNotEmpty()
    @IsString()
    @Length(2, 12)
    @Matches(/^[a-zA-Z0-9]*$/)
    password: string;
}