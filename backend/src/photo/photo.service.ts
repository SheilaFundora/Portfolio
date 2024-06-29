import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo) private PhotoRep: Repository<Photo>,
  ) {}

  async findAll() {
    try {
      const photos = await this.PhotoRep.find();
      return photos.map(photo => plainToClass(Photo, photo));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving photos');
    }
  }

  async findByUserId(username: string) {
    try {
      const photos = await this.PhotoRep.find({
        where: {
          user_id: {
            username: username
          },
        },
        relations: ['user_id'],
      });

      if (!photos.length) {
        throw new NotFoundException(`No photos found for username: ${username}`);
      }

      return photos.map(photo => plainToClass(Photo, photo));
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving photos by user ID');
    }
  }

  async create(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    try {
      const newPhoto = this.PhotoRep.create(createPhotoDto);
      return await this.PhotoRep.save(newPhoto);
    } catch (error) {
      throw new InternalServerErrorException('Error creating photo');
    }
  }

  async update(id: number, updatePhotoDto: UpdatePhotoDto) {
    try {
      const photo = await this.PhotoRep.findOneBy({ id });
      if (!photo) {
        throw new NotFoundException('Photo not found');
      }

      this.PhotoRep.merge(photo, updatePhotoDto);
      return await this.PhotoRep.save(photo);
    } catch (error) {
      throw new InternalServerErrorException('Error updating photo');
    }
  }

  async delete(id: number) {
    try {
      const result = await this.PhotoRep.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException('Photo not found');
      }
      return true;
    } catch (error) {
      throw new InternalServerErrorException('Error deleting photo');
    }
  }
}
