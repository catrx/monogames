import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { GameService } from "./game.service";
import { CreateGameDto } from "./dto/create-game.dto";
import { Game } from "./game.entity";
import { UpdateGameDto } from "./dto/update-game.dto";

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {} // Inject the GameService instance

  @Post() // Handle HTTP POST requests to create a Game
  create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.gameService.create(createGameDto);
  }

  @Get() // requests to retrieve all Games
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id') // requests to retrieve a Game by ID
  findOne(@Param('id') id: string): Promise<Game> {
    return this.gameService.findOne(+id);
  }

  @Put(':id') // PUT requests to update Game by ID
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto): Promise<Game> {
    return this.gameService.update(+id, updateGameDto);
  }

  @Delete(':id') // HTTP DELETE requests to remove a Game by ID
  remove(@Param('id') id: string) {
    return this.gameService.remove( +id);
  }
}
