import { IsEmail, IsNotEmpty, IsString} from "class-validator";

export class CreateUserDto {
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

    cvPath: string;

    level:string

    experience:string;

}
