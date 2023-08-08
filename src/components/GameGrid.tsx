import { Text, SimpleGrid } from '@chakra-ui/react';
import UseGames from '../Hooks/UseGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const {games, error} = UseGames();  
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} m={5}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid


