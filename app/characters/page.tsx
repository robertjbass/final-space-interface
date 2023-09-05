import Card from "@/app/components/ui/Card";
import { Character } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";

export default async function Characters() {
  const characters = await fetchData<Character>("character");
  return (
    <>
      <div className="grid grid-flow-row gap-8 place-items-center grid-cols-1 xs:grid-cols-2 xs:gap-16 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4">
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
      </div>
    </>
  );
}
