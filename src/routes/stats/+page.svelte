<script>
    import MetaTags from "../../lib/components/MetaTags.svelte";

    export let data;

    $: karts = data.karts
        .map((kart) => {
            return {
                ...kart,
                Score: getScore(kart, scoreVariables, rarityIndex),
            };
        })
        .sort((a, b) => {
            if (sortMethod === "Score") {
                if (sortOrder === "descending") {
                    return b.Score - a.Score;
                }
                return a.Score - b.Score;
            }

            let statToSortBy = scoreVariables.find(
                (stat) => stat.key === sortMethod,
            );
            if (sortOrder === "descending") {
                return (
                    b.kartUpgradeDefaultGearVector[rarityIndex].gearLimit[
                        statToSortBy.index
                    ][sortMethod] -
                    a.kartUpgradeDefaultGearVector[rarityIndex].gearLimit[
                        statToSortBy.index
                    ][sortMethod]
                );
            }
            return (
                a.kartUpgradeDefaultGearVector[rarityIndex].gearLimit[
                    statToSortBy.index
                ][sortMethod] -
                b.kartUpgradeDefaultGearVector[rarityIndex].gearLimit[
                    statToSortBy.index
                ][sortMethod]
            );
        });

    function getImg(id) {
        if (
            [
                "Kart_413000002",
                "Kart_413000003",
                "Kart_413000004",
                "Kart_413000006",
                "Kart_413000007",
                "Kart_413000008",
                "Kart_413000010",
                "Kart_413000014",
                "Kart_413000018",
                "Kart_413000019",
                "Kart_413000021",
                "Kart_413000022",
            ].some((specialId) => specialId === id)
        ) {
            return `/UI_Common/_Res/ItemIcon/hover_body/${id}.png`;
        }

        return `/UI_Common/_Res/ItemIcon/kart/${id}.png`;
    }

    let rarityIndex = "3";
    let sortOrder = "descending";
    let sortMethod = "DriftEscapeForce";

    let scoreVariables = [
        {
            key: "TransAccelFactor",
            name: "Boost Acceleration",
            shortName: "Boost Accel.",
            checked: true,
            index: 0,
        },
        {
            key: "DriftEscapeForce",
            name: "Drift Acceleration",
            shortName: "Drift Accel.",
            checked: true,
            index: 1,
        },
        {
            key: "BoosterTime",
            name: "Boost Duration",
            shortName: "Boost Dur.",
            index: 2,
        },
        {
            key: "DriftMaxGauge",
            name: "Boost Charge",
            shortName: "Boost Charge",
            index: 3,
        },
        {
            key: "ForceSlipEscapeFactor",
            name: "Long Slide Drift Sustain",
            shortName: "L.S.D.S.",
            index: 4,
        },
        {
            key: "DriftGaugePreservePercent",
            name: "Gauge Protection", // Crash Nitro Charge Protection, Crash Protection, Boost Gauge Protection
            shortName: "Gauge Protect",
            index: 5,
        },
        {
            key: "BoosterAccel",
            name: "Starting Boost",
            shortName: "Starting Boost",
            index: 6,
        },
        {
            key: "DraftMulAccelFactor",
            name: "Draft Acceleration",
            shortName: "Draft Accel.",
            index: 7,
        },
        {
            key: "AutoLongSlideDrift",
            name: "Auto Long Slide Drift",
            shortName: "A.L.S.D.",
            index: 8,
        },
    ];

    function getScore(kart, scoreVariables, rarityIndex) {
        return scoreVariables.reduce((acc, currStat) => {
            if (currStat.checked) {
                acc +=
                    kart.kartUpgradeDefaultGearVector[rarityIndex].gearLimit[
                        currStat.index
                    ][currStat.key];
            }
            return acc;
        }, 0);
    }
</script>

<MetaTags
    title="Kart Stats | Kart Cafe"
    description="Compare stats across all karts in KartRider: Drift."
    image="/images/1184140_header.jpg"
/>

<h1>Kart Stats</h1>
<div class="flex" style="align-items: start; gap: 1.5rem; flex-wrap: wrap">
    <div class="grid g-25">
        <strong>Tier</strong>
        <label style="color: var(--rarity-1)">
            <input type="radio" bind:group={rarityIndex} value="0" /> Common
        </label>
        <label style="color: var(--rarity-2)">
            <input type="radio" bind:group={rarityIndex} value="1" /> Uncommon
        </label>
        <label style="color: var(--rarity-3)">
            <input type="radio" bind:group={rarityIndex} value="2" /> Rare
        </label>
        <label style="color: var(--rarity-4)">
            <input type="radio" bind:group={rarityIndex} value="3" /> Heroic
        </label>
        <label style="color: var(--rarity-5)">
            <input type="radio" bind:group={rarityIndex} value="4" /> Legendary
        </label>
    </div>

    <div class="grid g-25">
        <strong class="accent">Score</strong>
        {#each scoreVariables as item}
            <label>
                <input type="checkbox" bind:checked={item.checked} />
                {item.name}
            </label>
        {/each}
    </div>

    <div class="grid g-25">
        <strong style="color: var(--highlight)">Sort by</strong>
        {#each scoreVariables as item}
            <label>
                <input type="radio" bind:group={sortMethod} value={item.key} />
                {item.name}
            </label>
        {/each}
        <label>
            <input type="radio" bind:group={sortMethod} value="Score" /> Score
        </label>
    </div>

    <div class="grid g-25">
        <strong style="color: var(--highlight)">Sort Order</strong>
        <label>
            <input type="radio" bind:group={sortOrder} value="descending" /> Descending
        </label>
        <label>
            <input type="radio" bind:group={sortOrder} value="ascending" /> Ascending
        </label>
    </div>
</div>

<table class="box surface full-bleed">
    <thead>
        <tr>
            <th>Kart</th>
            {#each scoreVariables as stat}
                <th
                    class:selected-col={stat.key === sortMethod}
                    class:accent={stat.checked}
                    data-sort-order={sortOrder === "descending" ? "↓" : "↑"}
                >
                    {stat.shortName}
                </th>
            {/each}
            <th
                class:selected-col={sortMethod === "Score"}
                data-sort-order={sortOrder === "descending" ? "↓" : "↑"}
                >Score</th
            >
        </tr>
    </thead>
    <tbody>
        {#each karts as kart, index}
            <tr>
                <td style="font-size: 1rem; line-height: 1.3">
                    <div
                        class="kart-name-wrapper grid"
                        data-index="{index + 1}/{karts.length}"
                    >
                        <img
                            src={getImg(kart.kartItemId.replace(":", "_"))}
                            alt=""
                            width="408"
                            height="380"
                        />
                        <span style="max-width: 14ch">{kart.name}</span>
                        <!-- <small style="color: var(--text2)">{kart.kartItemId}</small> -->
                    </div>
                </td>
                {#each scoreVariables as stat}
                    <td>
                        {kart.kartUpgradeDefaultGearVector[rarityIndex]
                            .gearLimit[stat.index][stat.key]}
                    </td>
                {/each}
                <td>
                    {getScore(kart, scoreVariables, rarityIndex)}
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style lang="scss">
    table {
        text-align: left;
        border-collapse: collapse;

        tr:nth-of-type(2n) {
            background: var(--surface2);
        }

        tbody td:not(:first-of-type) {
            text-align: center;
            font-weight: 500;
            font-size: 1.4rem;
        }

        td,
        th {
            padding: 0.5rem;
        }

        thead th {
            position: sticky;
            top: 90px;
            z-index: 3;
            background: var(--surface1);
            font-size: 1rem;
            font-weight: 500;
            border-bottom: 1px solid var(--surface2);
            padding-block: 1rem 1rem;
        }
    }

    img {
        max-width: 96px;
        height: auto;
    }

    button {
        background: var(--surface1);
        padding: 0.25rem 0.5rem;
        font-size: 0.9rem;
        border: none;
    }

    label {
        user-select: none;
        min-height: 20px;
    }

    .kart-name-wrapper {
        position: relative;
    }

    .kart-name-wrapper::before {
        content: attr(data-index);
        position: absolute;
        top: 0;
        left: 0;
        color: var(--text2);
        font-size: 0.8rem;
    }

    .selected-col::after {
        content: " " attr(data-sort-order);
        color: var(--highlight);
    }
</style>
