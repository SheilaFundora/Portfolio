import { Module } from '@nestjs/common';
import { ProjectImgService } from './project-img.service';
import { ProjectImgController } from './project-img.controller';

@Module({
  controllers: [ProjectImgController],
  providers: [ProjectImgService],
})
export class ProjectImgModule {}
