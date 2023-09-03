import { HStack, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../Hooks/Types";
import { Button } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <>
      <h1 className="app-name">Welcome to Game-Hub</h1>
      <p className="Inspiration">
        The inspiration for my game-hub project came from my lifelong love of
        gaming. Growing up, I spent countless hours immersed in virtual worlds,
        and I always dreamt of creating my own. In 2022 after learning a bit of
        programming, I finally decided to turn that dream into reality. Over the
        next one year, I poured my heart and soul into developing the game-hub,
        drawing from my own gaming experiences to create a platform that would
        bring joy and excitement to gamers around the world. Today, I'm proud to
        see my project come to life, a testament to my passion for gaming.
      </p>
      <HStack>
        <Button>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/emmanuel-tofa/"
            isExternal
          >
            LinkedIn
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Button>
        <Button>
          <Link
            target="_blank"
            href="https://twitter.com/tofauemmanuel"
            isExternal
          >
            Twitter
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Button>
        <Button>
          <Link
            target="_blank"
            href="https://github.com/uno36/game-hub.git"
            isExternal
          >
            Github
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Button>
        <Button>
          <Link
            target="_blank"
            href="https://github.com/uno36/game-hub.git"
            isExternal
          >
            My Video
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Button>
      </HStack>
      <Heading as="h1" marginY={3} marginX={2} fontSize="2xl" mt={5}>
        {heading}
      </Heading>
    </>
  );
};

export default GameHeading;
