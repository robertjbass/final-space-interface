import { Character } from "@/app/types";
import { fetchDataById } from "@/app/utils/fetchData";
import Image from "next/image";

export default async function Character({
  params,
}: {
  params: { id: string };
}) {
  const character: Character = await fetchDataById(
    "character",
    parseInt(params.id)
  );

  return (
    <section className="grid gap-8 place-items-center md:grid-cols-2 mg:bg-red-300 md:place-items-start md:gap-10 max-w-6xl mx-auto">
      <div className="rounded-xl bg-indigo-100 p-8 border border-indigo-300 w-[260px] md:mx-auto ">
        <Image
          src={character.img_url}
          alt={character.name}
          width={200}
          height={200}
          className="rounded-lg w-full h-100 object-cover"
        />
      </div>

      <article className="grid gap-4 md:w-full">
        <h1 className="font-bold text-3xl truncate ">{character.name}</h1>
        <p className="font-normal truncate">Species : {character.species}</p>
        <p className="font-light">Status: {character.status}</p>
        <p className="font-light">Origin : {character.origin}</p>
        <p className="font-light">Gender: {character.gender}</p>

        <div>
          <h2 className="font-medium text-lg mb-4">Aliases</h2>
          <div className="flex gap-4 flex-wrap">
            {character.alias.map((alias, index) => {
              const bracket = alias.indexOf("(");
              alias = bracket !== -1 ? alias.slice(0, bracket) : alias;
              return (
                <p
                  key={index}
                  className="font-light rounded-md bg-indigo-100 py-1.5 px-5 border border-indigo-300 min-w-fit"
                >
                  {alias}
                </p>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="font-medium text-lg mb-4">Abilities</h2>
          <div className="flex gap-4 flex-wrap">
            {character.abilities.map((ability, index) => {
              return (
                <p
                  key={index}
                  className="font-light rounded-md bg-indigo-100 py-1.5 px-5 border border-indigo-300"
                >
                  {ability}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
}
