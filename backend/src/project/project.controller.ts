import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('api/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get('user/:username')
  findByUserId(@Param('username') username: string) {
    return this.projectService.findByUserId(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() CreateProjectDto: CreateProjectDto) {
    return this.projectService.update(+id, CreateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.delete(+id);
  }
}
