import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject('DATA') private tasks: any[]
  ) {};

  getHello(value: string): string {
    //console.log(this.tasks);
    const apiKey = this.configService.apiKey;
    const host = this.configService.database.host;
    const port = this.configService.database.port;
    const domain = this.configService.application.domain;
    return `Hello World!  Envs: <strong>${apiKey}</strong> and  <strong>${host}:${port}</strong> into <strong>${domain}</strong> con ConfigService. From controller: <strong>${value}</strong>`;
  }
}
