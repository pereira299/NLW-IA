import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaService } from 'src/lib/prisma.service';
import { Prisma } from '@prisma/client';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import { promisify } from 'util';
import { pipeline } from 'stream';
import { OpenaiService } from 'src/lib/openai.service';

@Injectable()
export class VideoService {
  constructor(
    private prisma: PrismaService,
    private openai: OpenaiService,
  ) {}

  pump = promisify(pipeline);

  async create(createVideoDto: CreateVideoDto, file: Express.Multer.File) {
    const ext = path.extname(file.filename);

    const fileBaseName = path.basename(file.filename, ext);
    const fileUploadName = `${fileBaseName}-${randomUUID()}${ext}`;
    const uploadDestination = path.resolve(
      __dirname,
      '../../tmp',
      fileUploadName,
    );

    await this.pump(file.buffer, createWriteStream(uploadDestination));

    const data: Prisma.VideoCreateInput = {
      ...createVideoDto,
    };
    return this.prisma.video.create({
      data,
    });
  }

  findAll() {
    return this.prisma.video.findMany();
  }

  findOne(id: string) {
    return this.prisma.video.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateVideoDto: UpdateVideoDto) {
    const data: Prisma.VideoUpdateInput = {
      ...updateVideoDto,
    };

    return this.prisma.video.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.video.delete({
      where: {
        id,
      },
    });
  }

  async transcribe(id: string, prompt: string) {
    const video = await this.prisma.video.findUniqueOrThrow({
      where: {
        id: id,
      },
    });

    const videoPath = video.path;
    const audioReadStream = createReadStream(videoPath);

    const response = await this.openai.createAudioTranscription(
      audioReadStream,
      prompt,
    );

    const transcription = response.text;

    await this.prisma.video.update({
      where: {
        id: id,
      },
      data: {
        transcription,
      },
    });

    return {
      transcription,
    };
  }
}
