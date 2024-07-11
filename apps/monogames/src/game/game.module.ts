import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Game } from "./game.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [GameService],
  controllers: [GameController],
  exports: [GameService],
})
export class GameModule {}
