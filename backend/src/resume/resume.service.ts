import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resume } from './entities/resume.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume) private ResumeRep:Repository<Resume>,

)
{}
findAll()
{
return  this.ResumeRep.find();
}

getId(id: number)
{
    return this.ResumeRep.findOneBy({id});
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
