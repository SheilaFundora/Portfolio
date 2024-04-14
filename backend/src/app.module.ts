import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsuarioModule } from './usuario/user.module';
import { PersonModule } from './person/person.module';
import { ProjectModule } from './project/project.module';
import { ProjectImgModule } from './project-img/project-img.module';
import { SectionModule } from './section/section.module';
import { SocialNetworkModule } from './social-network/social-network.module';
import { ServicesModule } from './services/services.module';
import { PhotoModule } from './photo/photo.module';
import { ResumeModule } from './resume/resume.module';
import { SkillModule } from './skill/skill.module';
import { DataSourceConfig } from './database/data.source';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    TypeOrmModule.forRoot({...DataSourceConfig}),
    TypeOrmModule.forFeature([UsuarioModule, PersonModule, ProjectModule, ProjectImgModule, SectionModule, SocialNetworkModule, ServicesModule, PhotoModule, ResumeModule, SkillModule])
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
