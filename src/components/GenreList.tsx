import { HStack, Image, Text, List, ListItem, Spinner } from "@chakra-ui/react";
import UseGenres from "../Hooks/UseGenres";
import getCroppedImageUrl from "../services/image_url";

const GenreList = () => {
  const { data, isLoading, error  } = UseGenres();
  
  if (error) return null;

  if (isLoading) return <Spinner />
  
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
