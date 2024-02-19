import DT_stats from "./KtKartUpgradeCustomSetDef.json";
import en_US from "$lib/locales/en-US.json"

export function load() {
    const karts = 
        DT_stats[0].Rows.Normal.kartUpgradeCustomDefVector
        .map(kart => ({ ...kart, name: en_US.String[`Item_${kart.kartItemId}_NAME`] ?? "no name" }))

    return { karts }
}