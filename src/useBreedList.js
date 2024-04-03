import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  // if this is availible give me it if not dont give me an error.
  // if anything fails give me whats after the ?? which is an empty array
  return [results?.data?.breeds ?? [], results.status];
}
