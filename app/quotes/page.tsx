import { Quote } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";

export default async function Quotes() {
  const quotes = await fetchData<Quote>("quote");
  return <h1>QUOTES {quotes.length}</h1>;
}
