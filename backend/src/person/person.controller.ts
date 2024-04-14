import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';


@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.getId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() CreatePersonDto: CreatePersonDto) {
    return this.personService.update(+id, CreatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.Delete(+id);
  }
}
