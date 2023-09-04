import Image from "next/image";
import { Quote } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";

export default async function Quotes() {
  const quotes = await fetchData<Quote>("quote");
  return (
    <>
      <h1>QUOTES {quotes.length}</h1>
      <div className="grid grid-flow-row grid-cols-3 gap-8 place-items-center">
        {quotes.map((quote) => (
          <div className="col-span-1 bg-blue-200 w-[300px] p-8" key={quote.id}>
            <Image
              src={quote.image}
              width={200}
              height={200}
              alt={quote.quote}
            />

            <h2>{quote.quote}</h2>
            <p>{quote.by}</p>
          </div>
        ))}
      </div>
    </>
  );
}
