import { Game } from './Types'
import useData from './UseData'


const UseGames = () => useData<Game>('/games')

export default UseGames;
