import { Skill } from "src/skill/entities/skill.entity";
import { Usuario } from "src/usuario/entities/user.entity";

export class CreateProjectDto {




    id:number;
    name:string;
    category:string;
    client:string;
    dateProject:string;
    description:string;
    url:string;
    skill_id:Skill;
    user_id:Usuario;
}
