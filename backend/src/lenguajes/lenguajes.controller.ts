import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LenguajesService } from './lenguajes.service';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';

@Controller('api/lenguajes')
export class LenguajesController {
  constructor(private readonly lenguajesService: LenguajesService) {}

  @Post()
  create(@Body() createLenguajeDto: CreateLenguajeDto) {
    return this.lenguajesService.create(createLenguajeDto);
  }

  @Get()
  findAll() {
    return this.lenguajesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lenguajesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLenguajeDto: UpdateLenguajeDto) {
    return this.lenguajesService.update(+id, updateLenguajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lenguajesService.remove(+id);
  }
}
