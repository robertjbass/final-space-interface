import { Character } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";

export default async function Characters() {
  const characters = await fetchData<Character>("character");
  return <h1>CHARACTERS {characters.length}</h1>;
}
