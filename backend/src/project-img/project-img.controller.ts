import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectImgService } from './project-img.service';
import { CreateProjectImgDto } from './dto/create-project-img.dto';
import { UpdateProjectImgDto } from './dto/update-project-img.dto';

@Controller('api/project-img')
export class ProjectImgController {
  constructor(private readonly projectImgService: ProjectImgService) {}

  @Post()
  create(@Body() createProjectImgDto: CreateProjectImgDto) {
    return this.projectImgService.create(createProjectImgDto);
  }

  @Get()
  findAll() {
    return this.projectImgService.findAll();
  }

  @Get('user/:user_id')
  findByUserId(@Param('user_id') user_id: string) {
    return this.projectImgService.findByUserId(user_id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() CreateProjectImgDto: CreateProjectImgDto) {
    return this.projectImgService.update(+id, CreateProjectImgDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectImgService.Delete(+id);
  }
}
