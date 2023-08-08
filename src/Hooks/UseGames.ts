import { Game, GameQuery } from './Types'
import useData from './UseData'


const UseGames = (gameQuery: GameQuery) => useData<Game>('/games', {params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id}},[gameQuery] )

export default UseGames;
