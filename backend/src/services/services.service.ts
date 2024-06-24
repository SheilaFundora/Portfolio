import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Services } from './entities/service.entity';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Services) private ServicesRep: Repository<Services>,
  ) {}

  async findAll() {
    try {
      const services = await this.ServicesRep.find();
      return services.map(service => plainToClass(Services, service));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving services');
    }
  }

  async findByUserId(username: string) {
    try {
      const services = await this.ServicesRep.find({
        where: {
          user_id: {
            username: username
          },
        },
        relations: ['user_id'],
      });

      if (!services.length) {
        throw new NotFoundException(`No services found for username: ${username}`);
      }

      return services.map(service => plainToClass(Services, service));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving services by user ID');
    }
  }

  async create(createServiceDto: CreateServiceDto): Promise<Services> {
    try {
      const newService = this.ServicesRep.create(createServiceDto);
      return await this.ServicesRep.save(newService);
    } catch (error) {
      throw new InternalServerErrorException('Error creating service');
    }
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    try {
      const service = await this.ServicesRep.findOneBy({ id });
      if (!service) {
        throw new NotFoundException('Service not found');
      }

      this.ServicesRep.merge(service, updateServiceDto);
      return await this.ServicesRep.save(service);
    } catch (error) {
      throw new InternalServerErrorException('Error updating service');
    }
  }

  async delete(id: number) {
    try {
      const result = await this.ServicesRep.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('Service not found');
      }
      return true;
    } catch (error) {
      throw new InternalServerErrorException('Error deleting service');
    }
  }
}
