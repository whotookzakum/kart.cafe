import enUSLocale from "$lib/locale/en-US.json"

export const fetchCharacters = async () => {
  const allCharacterFiles = import.meta.glob('/src/lib/data/characters/*.json')
  const iterableItemFiles = Object.entries(allCharacterFiles)

  const allItems = await Promise.all(
    iterableItemFiles.map(async ([path, resolver]) => {
      const data = await resolver()
      // Add imgSrc for each costume based on id
      const costumes = data.default.costumes?.map(costume => {
        return { 
          ...costume, 
          name: enUSLocale.String[`Item_Costume:${costume.id}_NAME`],
          imgSrc: `/images/ItemIcon/costume/Costume_${costume.id}.png` 
        }
      }) || []

      // Add imgSrc for each costume based on id
      let emotes = {}
      for (const key in data.default.emotes) {
        emotes[key] = data.default.emotes[key]?.map(emote => {
          return { 
            ...emote, 
            name: enUSLocale.String[`Item_Motion:${emote.id}_NAME`]
          }
        })
      }

      // Add imgSrc for character based on id
      return { 
        ...data.default, 
        name: enUSLocale.String[`Item_Character:${data.default.id}_NAME`],
        imgSrc: `/images/ItemIcon/character/Character_${data.default.id}.png`,
        costumes,
        emotes
      }
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
      // Add imgSrc for kart based on id
      return {
        ...data.default,
        name: enUSLocale.String[`Item_Kart:${data.default.id}_NAME`],
        imgSrc: `/images/ItemIcon/kart/Kart_${data.default.id}.png`
      }
    })
  )

  return allItems
}

export const fetchTracks = async () => {
  const allTrackFiles = import.meta.glob('/src/lib/data/tracks/**/*.json')
  const iterableItemFiles = Object.entries(allTrackFiles)

  const allItems = await Promise.all(
    iterableItemFiles.map(async ([path, resolver]) => {
      const data = await resolver()
      const theme = path.split("/")[5]
      // Add imgSrc for track based on id
      return {
        ...data.default,
        imgSrc: `/images/Track/Loading/${data.default.id}.png`,
        theme
      }
    })
  )

  return allItems
}