import { Injectable, NotFoundException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
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
    @InjectRepository(Skill) private SkillRep: Repository<Skill>,
    @InjectRepository(Usuario) private UserRep: Repository<Usuario>,
  ) {}

  async findAll() {
    try {
      const skills = await this.SkillRep.find();
      return skills.map(skill => plainToClass(Skill, skill));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving skills');
    }
  }

  async findByUserId(username: string) {
    try {
      const skills = await this.SkillRep.find({
        where: {
          user_id: {
            username: username
          },
        },
        relations: ['user_id'],
      });

      if (!skills.length) {
        throw new NotFoundException(`No skills found for username: ${username}`);
      }

      return skills.map(skill => plainToClass(Skill, skill));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving skills by user ID');
    }
  }

  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    try {
      const newSkill = this.SkillRep.create(createSkillDto);
      return await this.SkillRep.save(newSkill);
    } catch (error) {
      throw new InternalServerErrorException('Error creating skill');
    }
  }

  async update(id: number, updateSkillDto: UpdateSkillDto) {
    try {
      const skill = await this.SkillRep.findOneBy({ id });
      if (!skill) {
        throw new NotFoundException('Skill not found');
      }

      this.SkillRep.merge(skill, updateSkillDto);
      return await this.SkillRep.save(skill);
    } catch (error) {
      throw new InternalServerErrorException('Error updating skill');
    }
  }

  async delete(id: number) {
    try {
      const result = await this.SkillRep.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('Skill not found');
      }
      return true;
    } catch (error) {
      throw new InternalServerErrorException('Error deleting skill');
    }
  }
}
