import { Injectable } from '@nestjs/common';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { Lenguaje } from './entities/lenguaje.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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

  findAll() {
    return  this.LenguajeRepo.find();
  }

  findOne(id: number) {
    return  this.LenguajeRepo.findOneBy({id});
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
