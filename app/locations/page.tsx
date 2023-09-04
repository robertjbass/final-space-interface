import { Location } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";

export default async function Locations() {
  const locations = await fetchData<Location>("location");
  return <h1>LOCATIONS {locations.length}</h1>;
}
