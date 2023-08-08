import { Game, GameQuery } from './types'
import useData from './useData'


const UseGames = (gameQuery: GameQuery) => useData<Game>('/games', {params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText}},[gameQuery] )

export default UseGames;
