import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from './entities/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person) private PersonRep:Repository<Person>,

)
{}

findAll()
{
return  this.PersonRep.find();
}

getId(id: number)
{
    return this.PersonRep.findOneBy({id});
}

async create(CreatePersonDto: CreatePersonDto): Promise<Person> {
    const NewPerson = this.PersonRep.create(CreatePersonDto);
    return this.PersonRep.save(NewPerson);
  }


async update (id:number, body:CreatePersonDto){
    const person = await this.PersonRep.findOneBy({id});
    if (!person) {
        throw new Error('id no encontrado');
      }
      this.PersonRep.merge(person, body);
      return this.PersonRep.save(person);
}


async Delete(id:number){
    await this.PersonRep.delete(id);
    return true;
}
}
