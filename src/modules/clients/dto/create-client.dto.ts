import { IsNotEmpty, IsNumber, IsString, IsEmail } from "class-validator";

export class CreateClientDto {
    
    @IsNotEmpty()
    @IsString()
    readonly firstName: string;

    @IsNotEmpty()
    @IsString()
    readonly lastName: string;
    
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly address: string;
}