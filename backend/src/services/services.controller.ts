import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { JwtAuthGuard } from 'src/usuario/jwt-auth.guard';

@Controller('api/services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  findAll() {
    return this.servicesService.findAll();
  }
  @Get('user/:username')
  findByUserId(@Param('username') username: string) {
    return this.servicesService.findByUserId(username);
  }

  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() CreateServiceDto: CreateServiceDto) {
    return this.servicesService.update(+id, CreateServiceDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.servicesService.delete(+id);
  }
}
