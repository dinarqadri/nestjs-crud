import { IsEmail, IsNotEmpty } from "class-validator";

export class UserDto {
    readonly last_name: string;

    readonly first_name: string;

    readonly avatar: string;

    readonly email: string;
}
