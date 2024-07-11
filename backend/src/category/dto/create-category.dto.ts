import { Usuario } from "src/usuario/entities/user.entity";
import { Category } from "../entities/category.entity";
import { Resume } from "src/resume/entities/resume.entity";

export class CreateCategoryDTO {


    id:number;
    name:string;

    resume: Resume;
    user_id:Usuario;
}
