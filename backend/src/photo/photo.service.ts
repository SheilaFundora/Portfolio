import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo) private PhotoRep:Repository<Photo>,

)
{}

findAll()
{
return  this.PhotoRep.find();
}

getId(id: number)
{
    return this.PhotoRep.findOneBy({id});
}

async create(CreatePhotoDto: CreatePhotoDto): Promise<Photo> {
    const NewPhoto = this.PhotoRep.create(CreatePhotoDto);
    return this.PhotoRep.save(NewPhoto);
  }


async update (id:number, body:CreatePhotoDto){
    const photo = await this.PhotoRep.findOneBy({id});
    if (!photo) {
        throw new Error('id no encontrado');
      }
      this.PhotoRep.merge(photo, body);
      return this.PhotoRep.save(photo);
}


async Delete(id:number){
    await this.PhotoRep.delete(id);
    return true;
}
}
