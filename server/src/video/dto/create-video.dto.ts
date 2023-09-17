import { IsDate, IsString, IsUUID } from 'class-validator';

export class CreateVideoDto {
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
