import { Game } from "../types/game";
import { useState } from "react";
import AddCard from "./add-card";
import { deleteGame } from "../api/games-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type GameCardProps = {
  game: Game
}
const GameCard = ({ game }: GameCardProps) => {
  const queryClient = useQueryClient();

  const [isEditing, setIsEditing] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: deleteGame,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['games'] })
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(game.id)
  }


  if(isEditing) return <AddCard game={game} setIsEditing={setIsEditing} />

  return(
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{game.name}</div>
          <p className="text-gray-700 text-base">
            {game.description}
          </p>
        </div>
        <div className="px-6 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{game.rating}</span>
          <button className="py-2 px-4 underline" type="button" onClick={() => setIsEditing(true)}>
            Modifier
          </button>
          <button className="py-2 px-4 underline text-red-600" type="button" onClick={handleDelete}>
            Supprimer
          </button>
        </div>
    </div>
  )
}

export default GameCard;
