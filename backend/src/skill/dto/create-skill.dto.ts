import { Usuario } from "src/usuario/entities/user.entity";

export class CreateSkillDto {


    id:number;
    porcent:string;
    icon: Buffer;
    user_id:Usuario;
}
