import { Character } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";
import Image from "next/image";

export default async function Characters() {
  const characters = await fetchData<Character>("character");
  return (
    <>
      <h1>CHARACTERS {characters.length}</h1>
      <div className="grid grid-flow-row grid-cols-3 gap-8 place-items-center">
        {characters.map((character) => (
          <div className="col-span-1 bg-blue-200 w-fit p-8" key={character.id}>
            <Image
              src={character.img_url}
              width={200}
              height={200}
              alt={character.name}
            />

            <h2>{character.name}</h2>
            <p>{character.origin}</p>
          </div>
        ))}
      </div>
    </>
  );
}
