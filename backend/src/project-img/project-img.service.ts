import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateProjectImgDto } from './dto/create-project-img.dto';
import { UpdateProjectImgDto } from './dto/update-project-img.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectIMG } from './entities/project-img.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ProjectImgService {
  constructor(
    @InjectRepository(ProjectIMG) private ProjectIMGRep: Repository<ProjectIMG>,
  ) {}

  async findAll() {
    try {
      const projects = await this.ProjectIMGRep.find();
      return projects.map(project => plainToClass(ProjectIMG, project));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving project images');
    }
  }

  async findByUserId(username: string) {
    try {
      const projects = await this.ProjectIMGRep.find({
        where: {
          user_id: {
            username: username
          },
        },
        relations: ['user_id'],
      });

      if (!projects.length) {
        throw new NotFoundException(`No project images found for username: ${username}`);
      }

      return projects.map(project => plainToClass(ProjectIMG, project));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving project images by user ID');
    }
  }

  async create(createProjectImgDto: CreateProjectImgDto): Promise<ProjectIMG> {
    try {
      const newProjectIMG = this.ProjectIMGRep.create(createProjectImgDto);
      return await this.ProjectIMGRep.save(newProjectIMG);
    } catch (error) {
      throw new InternalServerErrorException('Error creating project image');
    }
  }

  async update(id: number, updateProjectImgDto: UpdateProjectImgDto) {
    try {
      const projectIMG = await this.ProjectIMGRep.findOneBy({ id });
      if (!projectIMG) {
        throw new NotFoundException('Project image not found');
      }

      this.ProjectIMGRep.merge(projectIMG, updateProjectImgDto);
      return await this.ProjectIMGRep.save(projectIMG);
    } catch (error) {
      throw new InternalServerErrorException('Error updating project image');
    }
  }

  async delete(id: number) {
    try {
      const result = await this.ProjectIMGRep.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('Project image not found');
      }
      return true;
    } catch (error) {
      throw new InternalServerErrorException('Error deleting project image');
    }
  }
}
