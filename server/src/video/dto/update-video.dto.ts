import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoDto } from './create-video.dto';
import { IsDate, IsString, IsUUID } from 'class-validator';

export class UpdateVideoDto extends PartialType(CreateVideoDto) {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsString()
  path: string;

  @IsString()
  transcription: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
