import { Injectable } from '@nestjs/common';
import { CreateSocialNetworkDto } from './dto/create-social-network.dto';
import { UpdateSocialNetworkDto } from './dto/update-social-network.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SocialNetwork } from './entities/social-network.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SocialNetworkService {
  constructor(
    @InjectRepository(SocialNetwork) private SocialNetworkRep:Repository<SocialNetwork>,

)
{}
findAll()
{
return  this.SocialNetworkRep.find();
}

getId(id: number)
{
    return this.SocialNetworkRep.findOneBy({id});
}

async create(CreateSocialNetworkDto: CreateSocialNetworkDto): Promise<SocialNetwork> {

    const NewSocial = this.SocialNetworkRep.create(CreateSocialNetworkDto);
    return this.SocialNetworkRep.save(NewSocial);
  }


async update (id:number, body:CreateSocialNetworkDto){
    const social = await this.SocialNetworkRep.findOneBy({id});
    if (!social) {
        throw new Error('id no encontrado');
      }

      this.SocialNetworkRep.merge(social, body);
      return this.SocialNetworkRep.save(social);
}


async Delete(id:number){
    await this.SocialNetworkRep.delete(id);
    return true;
}
}