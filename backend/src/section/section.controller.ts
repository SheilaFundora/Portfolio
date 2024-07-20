import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { SectionModule } from './section.module';
import { JwtAuthGuard } from 'src/usuario/jwt-auth.guard';

@Controller('api/section')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.create(createSectionDto);
  }

  @Get()
  findAll() {
    return this.sectionService.findAll();
  }

  @Get('user/:user_id')
  findByUserId(@Param('user_id') user_id: string) {
    return this.sectionService.findByUserId(user_id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() CreateSectionDto: CreateSectionDto) {
    return this.sectionService.update(+id, CreateSectionDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.sectionService.delete(+id);
  }
  @Get('title/:title')
  async getSectionByTitle(@Param('title') title: string){
    return this.sectionService.findByTitle(title);
  }
}
