import { SubmitHandler, useForm } from "react-hook-form";
import { Game } from "../types/game";
import { postGame, updateGame } from "../api/games-api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Inputs = {
  name: string,
  description: string,
  rating: number,
  imageUrl: string
};

type AddCardProps = {
  game?: Game,
  setIsEditing?: (isEditing: boolean) => void
}

const AddCard = ({ game, setIsEditing }: AddCardProps) => {
  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: postGame,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['games'] })
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateGame,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['games'] })
    },
  });

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>({ defaultValues: game })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if(game) {
      const updateGame = {...data, id: game.id}
      updateMutation.mutate(updateGame)
      setIsEditing && setIsEditing(false)
    } else {
      data.imageUrl = 'https://via.placeholder.com/150'
      saveMutation.mutate(data)
      reset();
    }
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-game-name">
              Game name
            </label>
            <input {...register("name")} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-game-name" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-rating">
              Rating
            </label>
            <input {...register("rating")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-rating" type="number" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
              Description
            </label>
            <input {...register("description")} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-description" type="text" />
              <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          {game ? 'Modifier' : 'Ajouter'}
        </button>
      </form>
    </div>
  )
}

export default AddCard;
