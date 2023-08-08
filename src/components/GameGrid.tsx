import { Text, SimpleGrid} from '@chakra-ui/react';
import UseGames from '../Hooks/UseGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const {games, error, isLoading} = UseGames(); 
  const skeletons = [1, 2, 3, 4, 5, 6];
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 2, md: 3, lg: 4, xl: 5}} spacing={10} m={5}>
        {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid


