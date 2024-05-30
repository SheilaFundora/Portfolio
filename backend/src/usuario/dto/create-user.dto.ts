import { IsEmail, IsNotEmpty, IsOptional, IsString} from "class-validator";

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


    phone:string;

    @IsOptional()
    @IsString()
    birthday: string | null;

    address:string;

    degree:string;

    freelancer:boolean;

    remote:boolean;

    profession:string;


    cvPath: string;

    level:string

    experience:string;

}
