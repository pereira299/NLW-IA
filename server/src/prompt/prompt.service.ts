import { Injectable } from '@nestjs/common';
import { CreatePromptDto } from './dto/create-prompt.dto';
import { UpdatePromptDto } from './dto/update-prompt.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/lib/prisma.service';

@Injectable()
export class PromptService {
  constructor(private prisma: PrismaService) {}
  create(createPromptDto: CreatePromptDto) {
    const data: Prisma.PromptCreateInput = {
      ...createPromptDto,
    };
    return this.prisma.prompt.create({
      data,
    });
  }

  findAll() {
    return this.prisma.prompt.findMany();
  }

  findOne(id: string) {
    return this.prisma.prompt.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updatePromptDto: UpdatePromptDto) {
    const data: Prisma.PromptUpdateInput = {
      ...updatePromptDto,
    };

    return this.prisma.prompt.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.prompt.delete({
      where: {
        id,
      },
    });
  }
}
