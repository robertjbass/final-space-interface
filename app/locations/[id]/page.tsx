import Card from "@/app/components/ui/Card";
import Grid from "@/app/components/ui/Grid";
import { Character, Location } from "@/app/types";
import { fetchDataById } from "@/app/utils/fetchData";
import Image from "next/image";

export default async function Location({ params }: { params: { id: string } }) {
  const location: Location = await fetchDataById(
    "location",
    parseInt(params.id)
  );

  const residents: Character[] = await Promise.all(
    location.notable_residents.map(async (character) => {
      const id = character.split("/").pop()!;
      const characterData: Character = await fetchDataById("character", +id);
      return characterData;
    })
  );

  return (
    <section className="grid gap-8 ">
      <article className="gap-8 justify-center items-center  sm:flex ">
        <div className="rounded-xl bg-indigo-100 p-8 border border-indigo-300 w-[260px] mb-4">
          <Image
            src={location.img_url}
            alt={location.name}
            width={200}
            height={200}
            className="rounded-lg w-full h-100 object-cover "
          />
        </div>

        <div>
          <h1 className="font-bold text-3xl">{location.name}</h1>
          <p className="font-normal truncate">{location.type}</p>

          <article>
            <h2 className="font-bold text-xl py-2">Inhabitants</h2>

            <div className="flex gap-4 flex-wrap">
              {location.inhabitants.map((person, index) => {
                return (
                  <p
                    key={index}
                    className="font-light rounded-md bg-indigo-100 py-1.5 px-5 border border-indigo-300"
                  >
                    {person}
                  </p>
                );
              })}
            </div>
          </article>
        </div>
      </article>

      <div>
        <h1 className="font-medium text-2xl truncate mb-4">
          Notable Residents of {location.name}
        </h1>

        <Grid>
          {residents.map((character) => (
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
      </div>
    </section>
  );
}
