import { fetchDataById } from "@/app/utils/fetchData";

export default async function Quote({ params }: { params: { id: string } }) {
  const quoteData = await fetchDataById("character", parseInt(params.id));

  return (
    <>
      <pre>
        <code>{JSON.stringify(quoteData, null, 2)}</code>
      </pre>
    </>
  );
}
