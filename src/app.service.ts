import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('DATA') private tasks: any[]
  ) {}

  getHello(): string {
    console.log(this.tasks);
    return `Hello World with ${this.apiKey}`;
  }
}
