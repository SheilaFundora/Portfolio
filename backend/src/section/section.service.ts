import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Section } from './entities/section.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class SectionService {
  constructor(
    @InjectRepository(Section) private SectionRep: Repository<Section>,
  ) {}

  async findAll() {
    try {
      const sections = await this.SectionRep.find();
      return sections.map(section => plainToClass(Section, section));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving sections');
    }
  }

  async findByUserId(username: string) {
    try {
      const sections = await this.SectionRep.find({
        where: {
          user_id: {
            username: username
          },
        },
        relations: ['user_id'],
      });

      if (!sections.length) {
        throw new NotFoundException(`No sections found for username: ${username}`);
      }

      return sections.map(section => plainToClass(Section, section));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving sections by user ID');
    }
  }

  async create(createSectionDto: CreateSectionDto): Promise<Section> {
    try {
      const newSection = this.SectionRep.create(createSectionDto);
      return await this.SectionRep.save(newSection);
    } catch (error) {
      throw new InternalServerErrorException('Error creating section');
    }
  }

  async update(id: number, updateSectionDto: UpdateSectionDto) {
    try {
      const section = await this.SectionRep.findOneBy({ id });
      if (!section) {
        throw new NotFoundException('Section not found');
      }

      this.SectionRep.merge(section, updateSectionDto);
      return await this.SectionRep.save(section);
    } catch (error) {
      throw new InternalServerErrorException('Error updating section');
    }
  }

  async delete(id: number) {
    try {
      const result = await this.SectionRep.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('Section not found');
      }
      return true;
    } catch (error) {
      throw new InternalServerErrorException('Error deleting section');
    }
  }
}
