import { Injectable } from '@nestjs/common';
import { ReadStream } from 'fs';
import { OpenAI } from 'openai';

@Injectable()
export class OpenaiService {
  private openai: OpenAI;
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async createCompletion(prompt: string, temperature = 0.5, model = 'davinci') {
    return this.openai.completions.create({
      prompt,
      model,
      temperature,
    });
  }

  async createAudioTranscription(
    file: File | ReadStream,
    prompt: string,
    language = 'pt',
    model = 'whisper-1',
    temperature = 0.2,
  ) {
    return this.openai.audio.transcriptions.create({
      file,
      language,
      model,
      temperature,
      response_format: 'json',
      prompt,
    });
  }
}
