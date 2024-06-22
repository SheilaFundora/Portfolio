import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resume } from './entities/resume.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume) private ResumeRep:Repository<Resume>,

)
{}
async findAll()
{
const resumes = this.ResumeRep.find();
return (await resumes).map(resume => plainToClass(Resume, resume));
}

async findByUserId(user_id: string) {
  const resumes = this.ResumeRep.find({
    where: {
      user_id: {
        id: user_id,
      },
    },
    relations: ['user_id'],
  });
  return (await resumes).map(resume => plainToClass(Resume, resume));
}

async create(CreateResumeDto: CreateResumeDto): Promise<Resume> {

    const NewResume = this.ResumeRep.create(CreateResumeDto);
    return this.ResumeRep.save(NewResume);
  }


async update (id:number, body:CreateResumeDto){
    const resume = await this.ResumeRep.findOneBy({id});
    if (!resume) {
        throw new Error('id no encontrado');
      }
      this.ResumeRep.merge(resume, body);
      return this.ResumeRep.save(resume);
}


async Delete(id:number){
    await this.ResumeRep.delete(id);
    return true;
}
}
