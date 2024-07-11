import { useQuery } from "@tanstack/react-query";
import { getAllGames } from "../api/games-api";
import GameCard from "../components/game-card";
import { Game } from "../types/game";
import AddCard from "../components/add-card";

const Games = () => {
  const {data, status} = useQuery({ queryKey: ['games'], queryFn: getAllGames })

  return (
    <div>
      <h1 className='text-3xl font-semibold mb-4'>Jet'Games</h1>
      <Content games={data} status={status} />
    </div>
  )
}

type ContentProps = {
  games?: Array<Game>,
  status: 'error' | 'success' | 'pending'
}
const Content = ({games, status}: ContentProps) => {
  if(status === 'pending') return <p>Loading...</p>

  if(status === 'error') return <p>Error</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <AddCard />
      {games?.map(game => <GameCard game={game} key={game.id} />)}
    </div>
  )
}

export default Games;
