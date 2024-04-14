import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private ProjectRep:Repository<Project>,

)
{}
findAll()
{
return  this.ProjectRep.find();
}

getId(id: number)
{
    return this.ProjectRep.findOneBy({id});
}

async create(CreateProjectDto: CreateProjectDto): Promise<Project> {

    const newProject = this.ProjectRep.create(CreateProjectDto);
    return this.ProjectRep.save(newProject);
  }


async update (id:number, body:CreateProjectDto){
    const project = await this.ProjectRep.findOneBy({id});
    if (!project) {
        throw new Error('id no encontrado');
      }
      project.skill_id=body.skill_id;
      this.ProjectRep.merge(project, body);
      return this.ProjectRep.save(project);
}


async Delete(id:number){
    await this.ProjectRep.delete(id);
    return true;
}
}
