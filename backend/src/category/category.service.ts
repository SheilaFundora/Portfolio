import { Injectable, NotFoundException, InternalServerErrorException, BadRequestException, ConflictException } from '@nestjs/common';
import { CreateCategoryDTO } from './dto/create-category.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { Usuario } from 'src/usuario/entities/user.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private CatRep: Repository<Category>,
  ) {}

  async findAll() {
    try {
      const skills = await this.CatRep.find();
      return skills.map(category => plainToClass(Category, category));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving skills');
    }
  }

  async findByUserId(username: string) {
    try {
      const categories = await this.CatRep.find({
        where: {
          user_id: {
            username: username
          },
        },
        relations: ['user_id'],
      });

      if (!categories.length) {
        throw new NotFoundException(`No skills found for username: ${username}`);
      }

      return categories.map(cat => plainToClass(Category, cat));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving Category by user ID');
    }
  }

  async create(CreateCategoryDTO: CreateCategoryDTO): Promise<Category> {
    try {
      const existingCat = await this.CatRep.findOne({
        where: { name: CreateCategoryDTO.name }
      });
  
      if (existingCat) {
        throw new ConflictException('A Category with the same name already exists');
      }
  
        const newCat = this.CatRep.create(CreateCategoryDTO
      );
      return await this.CatRep.save(newCat);
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Error creating Category');
    }
  }
  

  async update(id: number, CreateCategoryDTO: CreateCategoryDTO) {
    try {
      const Category = await this.CatRep.findOneBy({ id });
      if (!Category) {
        throw new NotFoundException('Category not found');
      }

      this.CatRep.merge(Category, CreateCategoryDTO);
      return await this.CatRep.save(Category);
    } catch (error) {
      throw new InternalServerErrorException('Error updating Category');
    }
  }

  async delete(id: number) {
    try {
      const result = await this.CatRep.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('Category not found');
      }
      return true;
    } catch (error) {
      throw new InternalServerErrorException('Error deleting Category');
    }
  }
}
