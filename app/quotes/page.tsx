import Card from "@/app/components/ui/Card";
import { Quote } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";

export default async function Quotes() {
  const quotes = await fetchData<Quote>("quote");

  // group quotes by the given property
  function groupQuotesBy<K extends keyof Quote>(property: K) {
    const map = new Map<Quote[K], Quote[]>();

    quotes.forEach((quote) => {
      const key = quote[property];

      if (!map.has(key)) {
        map.set(key, [quote]);
      } else map.get(key)?.push(quote);
    });

    return map;
  }

  const quotedsGroupedByCharacter = groupQuotesBy("by");
  const keys = Array.from(quotedsGroupedByCharacter.keys());

  const renderQuotes = keys.map((key) => {
    const characterData = quotedsGroupedByCharacter.get(key) || [];

    const imageSrc = characterData[0].image;
    const characterID = characterData[0].character.split("/").pop();

    return (
      <article
        key={key}
        className=" flex flex-col items-center gap-6 mb-8 pb-8"
      >
        <Card
          src={imageSrc}
          title={key}
          subTitle={`${characterData.length} quotes`}
          url={`/characters/${characterID}`}
          key={key}
        />

        <ul className="grid grid-cols-1 gap-8 ">
          {characterData.map((record) => (
            <li
              className="rounded-md p-3 w-[260px] mx-auto border-[1px] border-indigo-200 text-center"
              key={record.quote}
            >
              {record.quote}
            </li>
          ))}
        </ul>
      </article>
    );
  });

  return (
    <section className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-16 lg:justify-around">
      {renderQuotes}
    </section>
  );
}
