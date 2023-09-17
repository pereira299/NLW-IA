import { Module } from '@nestjs/common';
import { PromptService } from './prompt.service';
import { PromptController } from './prompt.controller';
import { LibModule } from 'src/lib/lib.module';

@Module({
  imports: [LibModule],
  controllers: [PromptController],
  providers: [PromptService],
})
export class PromptModule {}
