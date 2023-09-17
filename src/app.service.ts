import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  apiKey:string;
  constructor(
    private configService: ConfigService,
    @Inject('DATA') private tasks: any[]
  ) {
    this.apiKey = this.configService.get('API_KEY');
  }

  getHello(value: string): string {
    //console.log(this.tasks);
    return `Hello World with ${this.apiKey} con ConfigService. From controller: ${value}`;
  }
}
