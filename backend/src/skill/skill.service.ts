import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from './entities/skill.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuario/entities/user.entity';
import { plainToClass } from 'class-transformer';


@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill) private SkillRep:Repository<Skill>,
    @InjectRepository(Usuario) private UserRep:Repository<Usuario>,
)
{}
async findAll()
{
const skills =  this.SkillRep.find();
return (await skills).map(skill => plainToClass(Skill, skill));
}

async findByUserId(username: string) {
  const skills = this.SkillRep.find({
    where: {
      user_id: {
        username: username
      },
    },
    relations: ['user_id'],
  });
  return (await skills).map(skill => plainToClass(Skill, skill));
}

async create(CreateSkillDto: CreateSkillDto): Promise<Skill> {

    const NewSkill = this.SkillRep.create(CreateSkillDto);
    return this.SkillRep.save(NewSkill);
  }


async update (id:number, body:CreateSkillDto){
    const skill = await this.SkillRep.findOneBy({id});
    if (!skill) {
        throw new Error('id no encontrado');
      }

      this.SkillRep.merge(skill, body);
      return this.SkillRep.save(skill);
}


async Delete(id:number){
    await this.SkillRep.delete(id);
    return true;
}
}
