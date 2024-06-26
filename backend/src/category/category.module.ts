import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuario/entities/user.entity';
import { Category } from './entities/category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports:[TypeOrmModule.forFeature([Category,Usuario])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class SkillModule {}
