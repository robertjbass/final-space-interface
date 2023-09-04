import { fetchDataById } from "@/app/utils/fetchData";

export default async function Location({ params }: { params: { id: string } }) {
  const locationData = await fetchDataById("location", parseInt(params.id));

  return (
    <>
      <pre>
        <code>{JSON.stringify(locationData, null, 2)}</code>
      </pre>
    </>
  );
}
