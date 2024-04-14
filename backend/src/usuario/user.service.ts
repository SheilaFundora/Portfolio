import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private UserRep:Repository<Usuario>,

)
{}
findAll()
{
return  this.UserRep.find();
}

getId(id: number)
{
    return this.UserRep.findOneBy({id});
}

async create(CreateUserDto: CreateUserDto): Promise<Usuario> {
    const NewUser = this.UserRep.create(CreateUserDto);
    return this.UserRep.save(NewUser);
  }


async update (id:number, body:CreateUserDto){
    const user = await this.UserRep.findOneBy({id});
    if (!user) {
        throw new Error('id no encontrado');
      }

      this.UserRep.merge(user, body);
      return this.UserRep.save(user);
}


async Delete(id:number){
    await this.UserRep.delete(id);
    return true;
}
}
