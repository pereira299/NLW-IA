import { IsDate, IsString, IsUUID } from 'class-validator';

export class CreatePromptDto {
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
