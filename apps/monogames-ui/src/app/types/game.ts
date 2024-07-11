type Game = {
  id: string,
  name: string,
  description: string,
  imageUrl: string,
  rating: number
}

type CreateGame = Omit<Game, "id">;
type UpdateGame = Partial<Game>;

export type { Game, CreateGame, UpdateGame };
