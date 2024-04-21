import { Module } from '@nestjs/common';
import { ProjectImgService } from './project-img.service';
import { ProjectImgController } from './project-img.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectIMG } from './entities/project-img.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProjectIMG])],
  controllers: [ProjectImgController],
  providers: [ProjectImgService],
})
export class ProjectImgModule {}
