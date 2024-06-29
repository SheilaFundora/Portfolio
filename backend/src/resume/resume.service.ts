import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resume } from './entities/resume.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume) private ResumeRep: Repository<Resume>,
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
      const resumes = await this.ResumeRep.find({
        where: {
          user_id: {
            username: username
          },
        },
        relations: ['user_id'],
      });

      if (!resumes.length) {
        throw new NotFoundException(`No resumes found for username: ${username}`);
      }

      return resumes.map(resume => plainToClass(Resume, resume));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving resumes by user ID');
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

  async update(id: number, updateResumeDto: UpdateResumeDto) {
    try {
      const resume = await this.ResumeRep.findOneBy({ id });
      if (!resume) {
        throw new NotFoundException('Resume not found');
      }

      this.ResumeRep.merge(resume, updateResumeDto);
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
