import { Text, SimpleGrid} from '@chakra-ui/react';
import UseGames from '../Hooks/UseGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../Hooks/Types';

interface Props {
  gameQuery: GameQuery;  
}

const GameGrid = ({gameQuery}: Props) => {
  const {data, error, isLoading} = UseGames(gameQuery); 
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        ml={2}
        mr={2}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((data) => (
          <GameCardContainer key={data.id}>
            <GameCard game={data} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid


