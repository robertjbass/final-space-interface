import { EndpointName, EndpointType } from "@/app/types";

export const fetchData = async <T extends EndpointType>(
  endpointName: EndpointName
): Promise<T[]> => {
  const response = await fetch(
    `https://finalspaceapi.com/api/v0/${endpointName}/`
  );
  const characters = await response.json();
  return characters;
};
