import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';

@Controller('api/resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Post()
  create(@Body() createResumeDto: CreateResumeDto) {
    return this.resumeService.create(createResumeDto);
  }

  @Get()
  findAll() {
    return this.resumeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resumeService.getId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() CreateResumeDto: CreateResumeDto) {
    return this.resumeService.update(+id, CreateResumeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resumeService.Delete(+id);
  }
}
