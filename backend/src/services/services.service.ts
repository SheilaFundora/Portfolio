import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Services } from './entities/service.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Services) private ServicesRep:Repository<Services>,

)
{}
async findAll()
{
const services = this.ServicesRep.find();
return (await services).map(service => plainToClass(Services, service));
}

async findByUserId(user_id: string) {
  const services = this.ServicesRep.find({
    where: {
      user_id: {
        id: user_id,
      },
    },
    relations: ['user_id'],
  });
  return (await services).map(service => plainToClass(Services, service));
}

async create(CreateServiceDto: CreateServiceDto): Promise<Services> {

    const NewService = this.ServicesRep.create(CreateServiceDto);
    return this.ServicesRep.save(NewService);
  }


async update (id:number, body:CreateServiceDto){
    const service = await this.ServicesRep.findOneBy({id});
    if (!service) {
        throw new Error('id no encontrado');
      }
      this.ServicesRep.merge(service, body);
      return this.ServicesRep.save(service);
}


async Delete(id:number){
    await this.ServicesRep.delete(id);
    return true;
}
}
