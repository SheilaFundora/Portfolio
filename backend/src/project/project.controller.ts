import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { JwtAuthGuard } from 'src/usuario/jwt-auth.guard';
import { Project } from './entities/project.entity';

@Controller('api/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
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
  @Get(':username/:id')
  async findByUsernameAndId(
    @Param('username') username: string,
    @Param('id') id: number,
  ): Promise<Project> {
    try {
      return await this.projectService.findByUsernameAndId(username, id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new InternalServerErrorException(error.message);
    }
  }
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.projectService.delete(+id);
  }
}
