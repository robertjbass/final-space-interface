import { fetchDataById } from "@/app/utils/fetchData";

export default async function Character({
  params,
}: {
  params: { id: string };
}) {
  const characterData = await fetchDataById("character", parseInt(params.id));

  return (
    <>
      <pre>
        <code>{JSON.stringify(characterData, null, 2)}</code>
      </pre>
    </>
  );
}
