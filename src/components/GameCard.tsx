import { Game } from "../Hooks/Types";
import getCroppedImageUrl from "../services/image_url";
import { Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height='100%'  >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack> 
      </CardBody>
    </Card>
  );
};

export default GameCard;
