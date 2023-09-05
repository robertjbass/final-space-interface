import Image from "next/image";
import { Location } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";
import Link from "next/link";

export default async function Locations() {
  const locations = await fetchData<Location>("location");
  return (
    <>
      <h1>LOCATIONS {locations.length}</h1>
      <div className="grid grid-flow-row grid-cols-3 gap-8 place-items-center">
        {locations.map((location) => (
          <Link
            href={`/locations/${location.id}`}
            className="col-span-1 bg-blue-200 w-fit p-8"
            key={location.id}
          >
            <Image
              src={location.img_url}
              width={200}
              height={200}
              alt={location.name}
            />

            <h2>{location.name}</h2>
            <p>{location.type}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
