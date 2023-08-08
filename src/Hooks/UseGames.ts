import { Game, Genre } from './Types'
import useData from './UseData'


const UseGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: { genres: selectedGenre?.id}},[selectedGenre?.id] )

export default UseGames;
