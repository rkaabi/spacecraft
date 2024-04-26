import { useQuery } from "@tanstack/react-query";

async function fetchFilmData(id: number) {
  try {
    const response = await fetch(`https://swapi.py4e.com/api/films/${id}/`);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error("Something bad happened with the api…");
  }
}

export function useFilms(id: number) {
  return useQuery({
    queryKey: ["film", id],
    queryFn: () => fetchFilmData(id),
  });
}
