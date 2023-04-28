import kartsData from "$lib/data/karts.json"
import charactersData from "$lib/data/characters.json"
import tracksData from "$lib/data/tracks.json";
import en_US from "$lib/locale/en-US.json";
import ko_KR from "$lib/locale/ko-KR.json";

function getLocalizations(id, category) {

    const locales = {
        en_US,
        ko_KR
    }

    let key;

    switch (category) {
        case "kart": 
            key = `Item_Kart:${id}_NAME`
            break;
        case "track":
            key = `TrackName2_${id}`
            break;
        case "trackTheme":
            key = `TrackThemeName_${id.split("_")[0]}`
            break;
        case "character":
            key = `Item_Character:${id}_NAME`
            break;
    }

    let result = {}
    Object.keys(locales).forEach(locale => {
        result[locale] = locales[locale].String[key]
    })
    return result
}

export async function load() {

    const karts = kartsData.map(kart => {
        return {
            ...kart,
            entry_type: 0,
            name: getLocalizations(kart.id, "kart"),
            imgSrc: `/images/ItemIcon/kart/Kart_${kart.id}.png`
        }
    })

    const tracks = tracksData.map(track => {
        return {
            ...track,
            entry_type: 3,
            name: getLocalizations(track.id, "track"),
            theme: getLocalizations(track.id, "trackTheme"),
            imgSrc: `/images/Track/Loading/${track.id}.png`,
        }
    })

    const characters = charactersData.map(character => {
        return {
            ...character,
            entry_type: 1,
            name: getLocalizations(character.id, "character"),
            imgSrc: `/images/ItemIcon/character/Character_${character.id}.png`,
        }
    })

    return { entries: [...karts, ...characters, ...tracks] }
}