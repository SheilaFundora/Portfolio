import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillDto } from './create-category.dto';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {}
