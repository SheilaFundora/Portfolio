import { Project } from "src/project/entities/project.entity";

export class CreateProjectImgDto {

    id:number;
    imgs: Buffer;
    project_id:Project;
}
