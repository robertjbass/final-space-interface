import { fetchDataById } from "@/app/utils/fetchData";

export default async function Episode({ params }: { params: { id: string } }) {
  const episodeData = await fetchDataById("episode", parseInt(params.id));

  return (
    <>
      <pre>
        <code>{JSON.stringify(episodeData, null, 2)}</code>
      </pre>
    </>
  );
}
