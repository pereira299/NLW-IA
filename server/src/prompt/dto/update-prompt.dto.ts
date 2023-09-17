import { PartialType } from '@nestjs/mapped-types';
import { CreatePromptDto } from './create-prompt.dto';
import { IsDate, IsString, IsUUID } from 'class-validator';

export class UpdatePromptDto extends PartialType(CreatePromptDto) {
  @IsUUID()
  id: string;

  @IsString()
  title: string;

  @IsString()
  template: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
