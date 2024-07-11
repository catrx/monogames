import { CreateGame, Game, UpdateGame } from "../types/game";

const getAllGames = async (): Promise<Array<Game>> => {
  const response = await fetch('http://localhost:3000/api/game');
  return response.json();
}

const postGame = async (game: CreateGame) => {
  const response = await fetch('http://localhost:3000/api/game', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(game)
  });
  return response.json();
}

const updateGame = async (game: UpdateGame) => {
  const response = await fetch(`http://localhost:3000/api/game/${game.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(game)
  });

  return response.json();
}

const deleteGame = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/game/${id}`, {
    method: 'DELETE'
  });
  return response.json();
}

export { getAllGames, postGame, updateGame, deleteGame };
