import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    avatar: string;

    @IsEmail()
    email: string;
}
