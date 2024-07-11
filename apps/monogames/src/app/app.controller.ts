import { Controller, Get, Post } from "@nestjs/common";

import { AppService } from './app.service';
import { GAMES } from "../assets/data";
import { GameService } from "../game/game.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly gameService: GameService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('/init')
  async initData() {
    for (const game of GAMES) {
      await this.gameService.create(game);
    }

    return({ message: 'Data inserted Successfully' });
  }
}
