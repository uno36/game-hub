import { Game, Genre, Platform } from './Types'
import useData from './UseData'


const UseGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', {params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id}},[selectedGenre?.id, selectedPlatform?.id] )

export default UseGames;
