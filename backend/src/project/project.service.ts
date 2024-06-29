import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private ProjectRep: Repository<Project>,
  ) {}

  async findAll() {
    try {
      const projects = await this.ProjectRep.find();
      return projects.map(project => plainToClass(Project, project));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving projects');
    }
  }

  async findByUserId(username: string) {
    try {
      const projects = await this.ProjectRep.find({
        where: {
          user_id: {
            username: username
          },
        },
        relations: ['user_id'],
      });

      if (!projects.length) {
        throw new NotFoundException(`No projects found for username: ${username}`);
      }

      return projects.map(project => plainToClass(Project, project));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving projects by user ID');
    }
  }

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    try {
      const newProject = this.ProjectRep.create(createProjectDto);
      return await this.ProjectRep.save(newProject);
    } catch (error) {
      throw new InternalServerErrorException('Error creating project');
    }
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    try {
      const project = await this.ProjectRep.findOneBy({ id });
      if (!project) {
        throw new NotFoundException('Project not found');
      }

      this.ProjectRep.merge(project, updateProjectDto);
      return await this.ProjectRep.save(project);
    } catch (error) {
      throw new InternalServerErrorException('Error updating project');
    }
  }

  async delete(id: number) {
    try {
      const result = await this.ProjectRep.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('Project not found');
      }
      return true;
    } catch (error) {
      throw new InternalServerErrorException('Error deleting project');
    }
  }
}
