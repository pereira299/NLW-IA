import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { LibModule } from 'src/lib/lib.module';

@Module({
  imports: [LibModule],
  controllers: [VideoController],
  providers: [VideoService],
})
export class VideoModule {}
