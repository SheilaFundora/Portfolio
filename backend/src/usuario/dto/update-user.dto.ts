import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    @IsString()
    username:string;
    
    @IsNotEmpty()
    password:string;

    firstName:string;

    lastName:string;

    age:string;

    lastname:string;

    phone:string;

    birthday:string;

    address:string;

    degree:string;

    freelancer:boolean;

    remote:boolean;

    profession:string;

    logo: Buffer;
}
