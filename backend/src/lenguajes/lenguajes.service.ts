import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { Lenguaje } from './entities/lenguaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class LenguajesService {
  constructor(
    @InjectRepository(Lenguaje) private LenguajeRepo: Repository<Lenguaje>,
  ) {}

  async create(createLenguajeDto: CreateLenguajeDto) {
    try {
      const newLenguaje = this.LenguajeRepo.create(createLenguajeDto);
      return await this.LenguajeRepo.save(newLenguaje);
    } catch (error) {
      throw new InternalServerErrorException('Error creating lenguaje');
    }
  }

  async findAll() {
    try {
      const lenguajes = await this.LenguajeRepo.find();
      return lenguajes.map(lenguaje => plainToClass(Lenguaje, lenguaje));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving lenguajes');
    }
  }

  async findByUserId(username: string) {
    try {
      const lenguajes = await this.LenguajeRepo.find({
        where: {
          user_id: {
            username: username
          },
        },
        relations: ['user_id'],
      });

      if (!lenguajes.length) {
        throw new NotFoundException(`No lenguajes found for username: ${username}`);
      }

      return lenguajes.map(lenguaje => plainToClass(Lenguaje, lenguaje));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving lenguajes by user ID');
    }
  }

  async update(id: number, updateLenguajeDto: UpdateLenguajeDto) {
    try {
      const lenguaje = await this.LenguajeRepo.findOneBy({ id });
      if (!lenguaje) {
        throw new NotFoundException('Lenguaje not found');
      }

      this.LenguajeRepo.merge(lenguaje, updateLenguajeDto);
      return await this.LenguajeRepo.save(lenguaje);
    } catch (error) {
      throw new InternalServerErrorException('Error updating lenguaje');
    }
  }

  async remove(id: number) {
    try {
      const result = await this.LenguajeRepo.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('Lenguaje not found');
      }
      return true;
    } catch (error) {
      throw new InternalServerErrorException('Error deleting lenguaje');
    }
  }
}
