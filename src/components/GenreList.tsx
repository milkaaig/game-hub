import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropperImageUrl from "../services/imageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void
}
const GenreList = ({onSelectGenre}: Props) => {
  const { data , isLoading, error} = useGenres(); 
  if(error) return null
  if (isLoading) return <Spinner/>

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id } paddingY='5px'>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCropperImageUrl(genre.image_background)}
            />
            <Button variant='link' fontSize='lg' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
