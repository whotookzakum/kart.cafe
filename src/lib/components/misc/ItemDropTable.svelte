<script>
    import squad from "$lib/data/itemModeDropRates/squad.json";
    import duo from "$lib/data/itemModeDropRates/duo.json";
    import solo from "$lib/data/itemModeDropRates/solo.json";
    import rankDefs from "$lib/data/itemModeDropRates/rankDefs.json";
    
    export let mode = "squad";
    export let players = 8;
    
    const dropRates = { solo, duo, squad }
    const ranks = Object.entries(rankDefs.find(rank => rank.players === players)[mode])
</script>

<table class="surface box">
    <thead>
        <th>Rank</th>
        <th colspan="9">Obtainable Items</th>
    </thead>
    <tbody>
        {#each ranks as rank, rankIndex}
            <tr>
                <th>{rank[1]}</th>
                {#each dropRates[mode]
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
