<script>
    import itemDropRates from "$lib/data/itemModeDropRates.json";
    const ranks = [
        "Top",
        "High",
        "Mid",
        "Low",
        // "Bottom"
    ];
</script>

<table class="surface box">
    <thead>
        <th>Rank</th>
        <th colspan="9">Obtainable Items</th>
    </thead>
    <tbody>
        {#each ranks as rank, rankIndex}
            <tr>
                <th>{rank}</th>
                {#each itemDropRates
                    .filter((item) => item.dropRates[rankIndex] > 0)
                    .sort((a, b) => b.dropRates[rankIndex] - a.dropRates[rankIndex]) as item}
                    <td>
                        <div class="grid">
                            <img
                                src={`/images/${item.imgSrc}.png`}
                                alt={item.name}
                                width="48"
                                height="48"
                                loading="lazy"
                            />
                            {item.dropRates[rankIndex]}%
                        </div>
                    </td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>

<style>
    thead {
        text-align: left;
    }

    .grid {
        place-items: center;
    }
</style>
