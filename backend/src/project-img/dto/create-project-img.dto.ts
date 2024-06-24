import { Project } from "src/project/entities/project.entity";
import { Usuario } from "src/usuario/entities/user.entity";

export class CreateProjectImgDto {

    id:number;
    imgs: string;
    project_id:Project;
    user_id:Usuario;
}
