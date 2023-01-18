import { fetchTracks } from "$lib/utils";

export const load = async () => {
  const items = await fetchTracks()
  return { items }
}