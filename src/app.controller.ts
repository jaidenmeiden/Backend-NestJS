import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('DATA') private data: any[]
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(JSON.stringify(this.data[0]));
  }
}
