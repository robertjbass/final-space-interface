import Card from "@/app/components/ui/Card";
import Grid from "@/app/components/ui/Grid";
import { Character, Episode } from "@/app/types";
import { fetchDataById } from "@/app/utils/fetchData";
import Image from "next/image";

export default async function Episode({ params }: { params: { id: string } }) {
  const episode: Episode = await fetchDataById("episode", parseInt(params.id));

  const characters: Character[] = await Promise.all(
    episode.characters.map(async (character) => {
      const id = character.split("/").pop()!;
      const characterData: Character = await fetchDataById("character", +id);
      return characterData;
    })
  );

  return (
    <div className="grid gap-8 ">
      <article className="gap-8 justify-center items-center  sm:flex ">
        <div className="rounded-xl bg-indigo-100 p-8 border border-indigo-300 w-[260px] mb-4">
          <Image
            src={episode.img_url}
            alt={episode.name}
            width={200}
            height={200}
            className="rounded-lg w-full h-100 object-cover "
          />
        </div>

        <div>
          <h1 className="font-bold text-3xl truncate ">{episode.name}</h1>
          <p className="font-normal truncate">Written by : {episode.writer}</p>
          <p className="font-normal truncate">
            Air Date : {new Date(episode.air_date).toDateString()}
          </p>
        </div>
      </article>

      <article>
        <h1 className="font-medium text-2xl truncate mb-4">
          Episode {params.id} Characters{" "}
        </h1>
        <Grid>
          {characters.map((character) => (
            <Card
              url={`/characters/${character.id}`}
              src={character.img_url}
              title={character.name}
              subTitle={character.species}
              text={character.origin}
              key={character.id}
            />
          ))}
        </Grid>
      </article>
    </div>
  );
}
