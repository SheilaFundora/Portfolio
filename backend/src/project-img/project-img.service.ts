import { Injectable } from '@nestjs/common';
import { CreateProjectImgDto } from './dto/create-project-img.dto';
import { UpdateProjectImgDto } from './dto/update-project-img.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectIMG } from './entities/project-img.entity';

@Injectable()
export class ProjectImgService {
  constructor(
    @InjectRepository(ProjectIMG) private ProjectIMGRep:Repository<ProjectIMG>,

)
{}
findAll()
{
return  this.ProjectIMGRep.find();
}

getId(id: number)
{
    return this.ProjectIMGRep.findOneBy({id});
}

async create(CreateProjectImgDto: CreateProjectImgDto): Promise<ProjectIMG> {

    const newProjectIMG = this.ProjectIMGRep.create(CreateProjectImgDto);
    return this.ProjectIMGRep.save(newProjectIMG);
  }


async update (id:number, body:CreateProjectImgDto){
    const projectIMG = await this.ProjectIMGRep.findOneBy({id});
    if (!projectIMG) {
        throw new Error('id no encontrado');
      }
      projectIMG.project_id=body.project_id;
      this.ProjectIMGRep.merge(projectIMG, body);
      return this.ProjectIMGRep.save(projectIMG);
}


async Delete(id:number){
    await this.ProjectIMGRep.delete(id);
    return true;
}
}
