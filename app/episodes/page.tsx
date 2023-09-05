import Card from "@/app/components/ui/Card";
import Grid from "@/app/components/ui/Grid";
import { Episode } from "@/app/types";
import { fetchData } from "@/app/utils/fetchData";

export default async function Episodes() {
  const episodes = await fetchData<Episode>("episode");

  return (
    <Grid>
      {episodes.map((episode) => (
        <Card
          url={`episodes/${episode.id}`}
          src={episode.img_url}
          title={episode.name}
          subTitle={episode.air_date}
          text={`Characters: ${episode.characters.length}`}
          key={episode.id}
        />
      ))}
    </Grid>
  );
}
