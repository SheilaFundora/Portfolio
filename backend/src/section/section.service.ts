import { Injectable } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from './entities/section.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section) private SectionRep:Repository<Section>,

)
{}
async findAll()
{
const sections = this.SectionRep.find();
return (await sections).map(section => plainToClass(Section, section));
}

async findByUserId(user_id: string) {
  const sections = this.SectionRep.find({
    where: {
      user_id: {
        id: user_id,
      },
    },
    relations: ['user_id'],
  });
  return (await sections).map(section => plainToClass(Section, section));
}

async create(CreateSectionDto: CreateSectionDto): Promise<Section> {

    const NewSection = this.SectionRep.create(CreateSectionDto);
    return this.SectionRep.save(NewSection);
  }


async update (id:number, body:CreateSectionDto){
    const section = await this.SectionRep.findOneBy({id});
    if (!section) {
        throw new Error('id no encontrado');
      }
      this.SectionRep.merge(section, body);
      return this.SectionRep.save(section);
}


async Delete(id:number){
    await this.SectionRep.delete(id);
    return true;
}
}
