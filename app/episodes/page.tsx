import { Episode } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";
import Image from "next/image";
import Link from "next/link";

export default async function Episodes() {
  const episodes = await fetchData<Episode>("episode");

  return (
    <>
      <h1>EPISODES {episodes.length}</h1>
      <div className="grid grid-flow-row grid-cols-3 gap-8 place-items-center">
        {episodes.map((episode) => (
          <Link
            href={`episodes/${episode.id}`}
            className="col-span-1 bg-blue-200 w-fit p-8"
            key={episode.id}
          >
            <Image
              src={episode.img_url}
              width={200}
              height={200}
              alt={episode.name}
            />

            <h2>{episode.name}</h2>
            <p>{episode.air_date}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
