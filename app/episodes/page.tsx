import { Episode } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";

export default async function Episodes() {
  const episodes = await fetchData<Episode>("episode");
  return <h1>EPISODES {episodes.length}</h1>;
}
