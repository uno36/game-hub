import { HStack, Image, Text, List, ListItem } from "@chakra-ui/react";
import UseGenres from "../Hooks/UseGenres";
import getCroppedImageUrl from "../services/image_url";

const GenreList = () => {
  const { data } = UseGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px'  borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
            <Text fontSize='lg' paddingX={2}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
