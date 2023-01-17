import { fetchCharacters } from '$lib/utils'

export const load = async () => {
    const items = await fetchCharacters()
    return { items }
}