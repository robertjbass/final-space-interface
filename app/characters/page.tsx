import Card from "@/app/components/ui/Card";
import Grid from "@/app/components/ui/Grid";
import { Character } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";

export default async function Characters() {
  const characters = await fetchData<Character>("character");
  return (
    <Grid>
      {characters.map((character) => (
        <Card
          url={`/characters/${character.id}`}
          src={character.img_url}
          title={character.name}
          subTitle={character.species}
          text={character.origin}
          key={character.id}
        ></Card>
      ))}
    </Grid>
  );
}
