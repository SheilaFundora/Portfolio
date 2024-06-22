import { Injectable } from '@nestjs/common';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { Lenguaje } from './entities/lenguaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class LenguajesService {
  constructor(
    @InjectRepository(Lenguaje) private LenguajeRepo:Repository<Lenguaje>,

)
{}
  async create(createLenguajeDto: CreateLenguajeDto) {
    const NewResume = this.LenguajeRepo.create(createLenguajeDto);
    return this.LenguajeRepo.save(NewResume);
  }

   async findAll() {
    const lenguajes =  this.LenguajeRepo.find();
    return (await lenguajes).map(lenguaje => plainToClass(Lenguaje, lenguaje));
  }

  async findByUserId(user_id: string) {
    const lenguajes = this.LenguajeRepo.find({
      where: {
        user_id: {
          id: user_id,
        },
      },
      relations: ['user_id'],
    });
    return (await lenguajes).map(lenguaje => plainToClass(Lenguaje, lenguaje));
  }

  async update(id: number, updateLenguajeDto: UpdateLenguajeDto) {
    const lenguaje = await this.LenguajeRepo.findOneBy({id});
    if (!lenguaje) {
        throw new Error('id no encontrado');
      }
      this.LenguajeRepo.merge(lenguaje, updateLenguajeDto);
      return this.LenguajeRepo.save(lenguaje);
}


  async remove(id: number) {
    await this.LenguajeRepo.delete(id);
    return true;
  }
}
