import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Game } from "./game.entity";
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
  ) {}

  async findAll(): Promise<Game[]> {
    return await this.gameRepository.find();
  }

  async findOne(id: number): Promise<Game> {
    const game = await this.gameRepository.findOne({ where: { id: id } });
    if (!game) {
      throw new NotFoundException(`Game with ID ${id} not found`);
    }
    return (game);
  }

  async create(createGameDto: CreateGameDto): Promise<Game> {
    const game = this.gameRepository.create(createGameDto);
    return await this.gameRepository.save(game);
  }

  async update(id: number, updateGameDto: UpdateGameDto): Promise<Game> {
    const game = await this.findOne(id);
    Object.assign(game, updateGameDto);
    return await this.gameRepository.save(game);
  }

  async remove(id: number) {

    const result = await this.gameRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`A game "${id}" was not found`);
    }
    return { message: 'Gale successfully deleted' };
  }
}
