import { Injectable, NotFoundException, InternalServerErrorException, ConflictException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { In, Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { Usuario } from 'src/usuario/entities/user.entity';
import { Skill } from 'src/skill/entities/skill.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private ProjectRep: Repository<Project>,
    @InjectRepository(Usuario) private UserRep: Repository<Usuario>,
    @InjectRepository(Skill) private SkillRep: Repository<Skill>,
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
      const user = await this.UserRep.findOne({
        where: { username },
      });
  
      if (!user) {
        throw new NotFoundException(`User not found for username: ${username}`);
      }
  
      const skills = await this.ProjectRep.find({
        where: {
          user_id: user, // Aquí usamos el objeto `user` directamente
        },
        relations: ['user_id'],
      });
  
      return skills.map(skill => plainToClass(Project, skill));
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error retrieving skills by user ID');
    }
  }



  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const { skill_ids, user_id, dateProject, url, ...projectData } = createProjectDto;

    try {
      // Verificar si la URL del proyecto ya existe
      const existingProject = await this.ProjectRep.findOne({ where: { url } });
      if (existingProject) {
        throw new ConflictException(`Project with URL ${url} already exists`);
      }

      const user = await this.UserRep.findOne({ where: { id: user_id.id } });
      if (!user) {
        throw new NotFoundException(`User not found with ID: ${user_id.id}`);
      }

      const skills = await this.SkillRep.find({
        where: { id: In(skill_ids) },
      });

      if (!skills.length) {
        throw new NotFoundException(`Skills not found with the provided IDs`);
      }

      const newProject = this.ProjectRep.create({
        ...projectData,
        dateProject: dateProject ? dateProject : null,
        url,
        user_id: user, // Aquí asignamos el user_id directamente
        skills,  // Asignar las habilidades correctamente
      });

      return await this.ProjectRep.save(newProject);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Error creating project');
    }
  }
  
  
  
  
  


  async update(id: number, updateProjectDto: UpdateProjectDto): Promise<Project> {
    const { skill_ids, user_id, dateProject, ...projectData } = updateProjectDto;

    try {
      const project = await this.ProjectRep.findOne({ where: { id }, relations: ['user', 'skills'] });
      if (!project) {
        throw new NotFoundException('Project not found');
      }

      if (skill_ids) {
        const skills = await this.SkillRep.find({
          where: { id: In(skill_ids) },
        });
        if (!skills.length) {
          throw new NotFoundException(`Skills not found with the provided IDs`);
        }
        project.skills = skills;
      }

      if (dateProject === '') {
        project.dateProject = null;
      } else if (dateProject !== undefined) {
        project.dateProject = dateProject;
      }

      this.ProjectRep.merge(project, projectData);
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
