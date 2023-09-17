import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { OpenaiService } from './openai.service';

@Module({
  providers: [PrismaService, OpenaiService],
  exports: [PrismaService, OpenaiService],
})
export class LibModule {}
