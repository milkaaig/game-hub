import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCropperImageUrl from "../services/imageUrl";

interface Props{
    game: Game;
}


const GameCard = ({game}: Props) => {
  return (
   <Card  width='200px'borderRadius={10} overflow={"hidden"}>
    <Image src={getCropperImageUrl(game.background_image)}/>
    <CardBody>
        <Heading fontSize={"2xl"}>
            {game.name}
        </Heading>
        <HStack justifyContent='space-between'>
            <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
            <CriticScore score={game.metacritic}/>
        </HStack>
    </CardBody>
   </Card>
  )
}

export default GameCard