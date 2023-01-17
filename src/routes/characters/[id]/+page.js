import { fetchCharacters } from "$lib/utils"

export const load = async ({ params }) => {
    // const allCharacters = await fetchCharacters()
    // const characterId = params.id
    // const character = allCharacters.find(c => c.id == characterId)
    // const fileName = character.name.toLowerCase().replace(" ", "-")

    const characterData = await import (`../../../lib/data/characters/bazzi.json`)
    return { ...characterData }
}