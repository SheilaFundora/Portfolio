import { Injectable } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from './entities/section.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section) private SectionRep:Repository<Section>,

)
{}
findAll()
{
return  this.SectionRep.find();
}

getId(id: number)
{
    return this.SectionRep.findOneBy({id});
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
