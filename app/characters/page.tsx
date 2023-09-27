import Card from "@/app/components/ui/Card";
import Grid from "@/app/components/ui/Grid";
import { Character } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Characters(props: Props) {
  const characters = await fetchData<Character>("character");
  const { query } = props.searchParams;

  const filterCharacters = function (character: Character, query: string) {
    return (
      character.name?.toLowerCase().includes(query.toLowerCase()) ||
      character.species?.toLowerCase().includes(query.toLowerCase()) ||
      character.origin?.toLowerCase().includes(query.toLowerCase())
    );
  };

  const results = (() => {
    if (!query) return characters;

    return characters.filter((character) => {
      return filterCharacters(character, query as string);
    });
  })();

  if (!results.length) {
    return <p>No results</p>;
  }

  return (
    <Grid>
      {results.map((character) => (
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
