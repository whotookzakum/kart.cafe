import { fetchKarts } from "$lib/utils";

export const load = async () => {
  const items = await fetchKarts()
  return { items }
}