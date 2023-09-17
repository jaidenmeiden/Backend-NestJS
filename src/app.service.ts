import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private config: ConfigService,
    @Inject('DATA') private tasks: any[]
  ) {};

  getHello(value: string): string {
    //console.log(this.tasks);
    const apiKey = this.config.get<string>('API_KEY');
    const domain = this.config.get('APP_DOMAIN');
    return `Hello World!  Envs: ${apiKey} and  ${domain} con ConfigService. From controller: ${value}`;
  }
}
