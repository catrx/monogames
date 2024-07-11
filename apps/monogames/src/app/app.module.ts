import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from "../game/game.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Game } from "../game/game.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [Game],
    }),
    GameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
