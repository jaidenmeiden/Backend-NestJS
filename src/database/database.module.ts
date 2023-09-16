import { Module, Global } from '@nestjs/common';

const API_KEY = process.env.API_KEY;
const API_KEY_PROD = process.env.API_KEY_PROD;

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.APP_ENV === 'production' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
