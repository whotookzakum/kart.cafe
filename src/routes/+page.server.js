import kartsData from "$lib/data/karts.json"
import charactersData from "$lib/data/characters.json"
import tracksData from "$lib/data/tracks.json";
import en_US from "$lib/locales/en-US.json";
import ko_KR from "$lib/locales/ko-KR.json";
import de_DE from "$lib/locales/de-DE.json";
import es_419 from "$lib/locales/es-419.json";
import fr_FR from "$lib/locales/fr-FR.json";
import it_IT from "$lib/locales/it-IT.json";
import ja_JP from "$lib/locales/ja-JP.json";
import pt_BR from "$lib/locales/pt-BR.json";
import th_TH from "$lib/locales/th-TH.json";
import zh_Hans from "$lib/locales/zh-Hans.json";
import zh_Hant from "$lib/locales/zh-Hant.json";

function getLocalizations(id, category) {

    const locales = {
        en_US,
        ko_KR,
        de_DE,
        es_419,
        fr_FR,
        it_IT,
        ja_JP,
        pt_BR,
        th_TH,
        zh_Hans,
        zh_Hant
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
            imgSrc: `/UI_Common/_Res/ItemIcon/kart/Kart_${kart.id}.png`
        }
    })

    const tracks = tracksData.map(track => {
        return {
            ...track,
            entry_type: 3,
            name: getLocalizations(track.id, "track"),
            theme: getLocalizations(track.id, "trackTheme"),
            imgSrc: `/UI_Common/_Res/Track/Loading/${track.id}.png`,
        }
    })

    const characters = charactersData.map(character => {
        return {
            ...character,
            entry_type: 1,
            name: getLocalizations(character.id, "character"),
            imgSrc: `/UI_Common/_Res/ItemIcon/character/Character_${character.id}.png`,
        }
    })

    return { entries: [...karts, ...characters, ...tracks] }
}