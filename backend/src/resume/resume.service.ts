import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resume } from './entities/resume.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { Usuario } from 'src/usuario/entities/user.entity';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume) private ResumeRep: Repository<Resume>,
    @InjectRepository(Usuario) private UserRep: Repository<Usuario>,
    @InjectRepository(Category) private CatRep: Repository<Category>,
  ) {}

  async findAll() {
    try {
      const resumes = await this.ResumeRep.find();
      return resumes.map(resume => plainToClass(Resume, resume));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving resumes');
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
  
      const skills = await this.ResumeRep.find({
        where: {
          user_id: user, // Aquí usamos el objeto `user` directamente
        },
        relations: ['user_id'],
      });
  
      return skills.map(skill => plainToClass(Resume, skill));
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error retrieving skills by user ID');
    }
  }

  async create(createResumeDto: CreateResumeDto): Promise<Resume> {
    try {
      const newResume = this.ResumeRep.create(createResumeDto);
      return await this.ResumeRep.save(newResume);
    } catch (error) {
      throw new InternalServerErrorException('Error creating resume');
    }
  }

  async update(id: number, updateResumeDto: UpdateResumeDto): Promise<Resume> {
    const { ...resumeData } = updateResumeDto;

    try {
      const resume = await this.ResumeRep.findOne({ where: { id }});
      if (!resume) {
        throw new NotFoundException('Resume not found');
      }

      this.ResumeRep.merge(resume, resumeData);
      return await this.ResumeRep.save(resume);
    } catch (error) {
      throw new InternalServerErrorException('Error updating resume');
    }
  }

  async delete(id: number) {
    try {
      const result = await this.ResumeRep.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('Resume not found');
      }
      return true;
    } catch (error) {
      throw new InternalServerErrorException('Error deleting resume');
    }
  }
}
