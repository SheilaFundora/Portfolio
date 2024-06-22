import { Injectable } from '@nestjs/common';
import { CreateProjectImgDto } from './dto/create-project-img.dto';
import { UpdateProjectImgDto } from './dto/update-project-img.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectIMG } from './entities/project-img.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ProjectImgService {
  constructor(
    @InjectRepository(ProjectIMG) private ProjectIMGRep:Repository<ProjectIMG>,

)
{}
async findAll()
{
const projects = this.ProjectIMGRep.find();
return (await projects).map(project => plainToClass(ProjectIMG, project));
}

async findByUserId(username: string) {
  const projects = this.ProjectIMGRep.find({
    where: {
      user_id: {
        username: username
      },
    },
    relations: ['user_id'],
  });
  return (await projects).map(project => plainToClass(ProjectIMG, project));
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
