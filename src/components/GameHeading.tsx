import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../Hooks/types"

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={3} marginX={2} fontSize="2xl" mt={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
