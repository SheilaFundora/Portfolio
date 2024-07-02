import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateSkillDto } from './dto/update-category.dto';

@Controller('api/category')
export class CategoryController {
  constructor(private readonly CategoryService: CategoryService) {}

  @Post()
  create(@Body() CreateCategoryDTO: CreateCategoryDTO) {
    return this.CategoryService.create(CreateCategoryDTO);
  }

  @Get()
  findAll() {
    return this.CategoryService.findAll();
  }

  @Get('user/:user_id')
  findByUserId(@Param('user_id') user_id: string) {
    return this.CategoryService.findByUserId(user_id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() CreateCategoryDTO: CreateCategoryDTO) {
    return this.CategoryService.update(+id, CreateCategoryDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CategoryService.delete(+id);
  }
}
