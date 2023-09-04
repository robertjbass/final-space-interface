import { Episode, Location, Quote } from "@/app/types";
import { Character } from "@/app/types";
import { fetchData } from "@/app/fetchData";

export default async function Home() {
  const characters = await fetchData<Character>("character");
  const episodes = await fetchData<Episode>("episode");
  const locations = await fetchData<Location>("location");
  const quotes = await fetchData<Quote>("quote");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      characters: {characters.length}
      <br />
      episodes: {episodes.length}
      <br />
      locations: {locations.length}
      <br />
      quotes: {quotes.length}
      <br />
    </main>
  );
}
