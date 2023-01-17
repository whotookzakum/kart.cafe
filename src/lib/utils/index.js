export const fetchCharacters = async () => {
    const allCharacterFiles = import.meta.glob('/src/lib/data/characters/*.json')
    const iterableItemFiles = Object.entries(allCharacterFiles)

    const allItems = await Promise.all(
        iterableItemFiles.map(async ([path, resolver]) => {
            const data = await resolver()
            return data.default
        })
    )

    return allItems
}

export const fetchKarts = async () => {
  const allKartFiles = import.meta.glob('/src/lib/data/karts/*.json')
  const iterableItemFiles = Object.entries(allKartFiles)

  const allItems = await Promise.all(
    iterableItemFiles.map(async ([path, resolver]) => {
      const data = await resolver()
      return data.default
    })
  )

  return allItems
}