import DT_stats from "./KtKartUpgradeCustomSetDef.json";
import en_US from "$lib/locales/en-US.json"

export function load() {
    const karts = 
        DT_stats[0].Rows.Normal.kartUpgradeCustomDefVector
        .map(kart => ({ ...kart, name: en_US.String[`Item_${kart.kartItemId}_NAME`] ?? "no name" }))
        // First sort by boost duration, the 2nd most important stat. Index 3 = stats for heroic tier
        .sort((a, b) => b.kartUpgradeDefaultGearVector[3].gearLimit[2].BoosterTime - a.kartUpgradeDefaultGearVector[3].gearLimit[2].BoosterTime)
        .sort((a, b) => b.kartUpgradeDefaultGearVector[3].gearLimit[1].DriftEscapeForce - a.kartUpgradeDefaultGearVector[3].gearLimit[1].DriftEscapeForce);

    

    return { karts }
}