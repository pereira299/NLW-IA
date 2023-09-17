import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromptModule } from './prompt/prompt.module';
import { VideoModule } from './video/video.module';
import { LibModule } from './lib/lib.module';

@Module({
  imports: [PromptModule, VideoModule, LibModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
