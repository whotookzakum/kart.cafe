<script>
    import TrackItem from "$lib/components/TrackItem.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import _ from "lodash";

    export let data;

    const activeFilters = {
        theme: "All",
        difficulties: [1, 2, 3, 4, 5],
        showItemTracks: true,
        licenses: ["None", "B2", "B1", "L3"]
    }

    $: tracks = 
        data.items
        .filter(track => activeFilters.theme === "All" || activeFilters.theme.includes(track.theme))
        .filter(track => activeFilters.difficulties.includes(track.difficulty) || activeFilters.difficulties.length === 5)
        .filter(track => activeFilters.showItemTracks && track.itemMode || !track.itemMode)
        .filter(track => activeFilters.licenses.includes(track.reqLicense || "None"))


    function resetFilters() {
        activeFilters.theme = "All"
        activeFilters.difficulties = [1, 2, 3, 4, 5]
        activeFilters.showItemTracks = true
        activeFilters.licenses = ["None", "B2", "B1", "L3"]
    }

</script>

<div>
    <button class="box surface" on:click={resetFilters}>Reset</button>
    <select name="" id="" bind:value={activeFilters.theme}>
        <option value="All">All</option>
        {#each _.uniqBy(data.items, (t) => t.theme).map((t) => t.theme) as theme}
            <option value={theme}>{theme}</option>
        {/each}
    </select>
    <br />
    Difficulty:
    {#each [1, 2, 3, 4, 5] as difficulty}
        <label>
            <input type="checkbox" name="difficulty" value={difficulty} bind:group={activeFilters.difficulties} />
            {difficulty}
        </label>
    {/each}
    <br />
    Show Item-mode Tracks:
    <input type="checkbox" name="showItemTracks" bind:checked={activeFilters.showItemTracks} />
    <br />
    Required License: 
    {#each ["None", "B2", "B1", "L3"] as license}
        <label>
            <input type="checkbox" name="minLicense" value={license} bind:group={activeFilters.licenses} />
            {license}
        </label>
    {/each}
</div>

<div class="full-bleed grid">
    <h1>Tracks</h1>
    <ItemMenu itemWidth="230">
        {#each tracks as track}
            <TrackItem {track} />
        {/each}
    </ItemMenu>
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
