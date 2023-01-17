import { fetchCharacters } from '$lib/utils'

export const load = async ({params}) => {
    const characters = await fetchCharacters()
    const character = characters.find(c => c.id == params.id)
    return character
}