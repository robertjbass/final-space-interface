import Card from "@/app/components/ui/Card";
import Grid from "@/app/components/ui/Grid";
import { Location } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";

export default async function Locations() {
  const locations = await fetchData<Location>("location");
  return (
    <Grid>
      {locations.map((location) => (
        <Card
          url={`/locations/${location.id}`}
          src={location.img_url}
          title={location.name}
          subTitle={location.type}
          text={`Inhabitants: ${location.inhabitants.length}`}
          key={location.id}
        ></Card>
      ))}
    </Grid>
  );
}
