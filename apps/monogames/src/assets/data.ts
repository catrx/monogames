import { CreateGameDto } from "../game/dto/create-game.dto";

export const GAMES: Array<CreateGameDto> = [
  {
    name: "Call Of Duty: World War II",
    description: "Jeu de guerre",
    imageUrl: 'test',
    rating: 68
  },
  {
    name: "FIFA 23",
    description: "Jeu de foot",
    imageUrl: "Test",
    rating: 10.5
  },
  {
    name: "Mario Kart 8 Deluxe",
    description: "Jeu de kart fun",
    imageUrl: "Test",
    rating: 50
  },
  {
    name: "Tomb Raider",
    description: "Jeu d'aventure",
    imageUrl: 'test',
    rating: 40
  },
  {
    name: "Assassin's Creed",
    description: "Aventure et assassinat",
    imageUrl: "Test",
    rating: 98
  },
  {
    name: "CyberPunk 2077",
    description: "Pas opti",
    imageUrl: "Test",
    rating: 10
  }
]
