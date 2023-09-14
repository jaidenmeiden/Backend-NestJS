import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ProofController} from "./proof/proof.controller";

@Module({
  imports: [],
  controllers: [
    AppController,
    ProofController
  ],
  providers: [AppService],
})
export class AppModule {}
