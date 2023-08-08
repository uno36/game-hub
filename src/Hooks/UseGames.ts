import {useState, useEffect} from 'react'
import apiClient from '../services/api_client'
import { Game, FetchGamesResponse } from './Types'


const UseGames = () => {  

const [games, setGames] = useState<Game[]>([]);
const [error, setError] = useState('');

useEffect(() => {
  const controller = new AbortController();

  apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal})
    .then((res) => setGames(res.data.results))
    .catch(err =>{
      if (err instanceof CanceledError) return; 
      setError(err.message)
    });

  return () => controller.abort();  
}, []);
return { games, error}
}

export default UseGames
