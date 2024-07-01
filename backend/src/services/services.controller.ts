import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('api/services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() CreateServiceDto: CreateServiceDto) {
    return this.servicesService.update(+id, CreateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.delete(+id);
  }
}
