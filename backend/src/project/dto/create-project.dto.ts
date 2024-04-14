import { Skill } from "src/skill/entities/skill.entity";

export class CreateProjectDto {




    id:number;
    name:string;
    category:string;
    client:string;
    Date:string;
    description:string;
    url:string;
    skill_id:Skill;
}
