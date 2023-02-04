<script>
    import TrackItem from "$lib/components/TrackItem.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import _ from "lodash";

    export let data;
    const tracks = data.items;

    const themes = _.uniqBy(data.items, (track) => track.theme).map(
        (track) => track.theme
    );
    const difficulties = [1, 2, 3, 4, 5];
    const modes = ["Speed", "Item"];
    const licenses = ["B2", "B1", "L3"]
</script>

<div>
    <select name="" id="">
        <option value="All">All</option>
        {#each themes as theme}
            <option value={theme}>{theme}</option>
        {/each}
    </select>
    <br/>
    Difficulty:
    {#each difficulties as difficulty}
        <label>
            <input type="checkbox" name="difficulty" value={difficulty} />
            {difficulty}
        </label>
    {/each}
    <br/>
    Mode:
    {#each modes as mode}
        <label>
            <input type="checkbox" name="gameModes" value={mode} />
            {mode}
        </label>
    {/each}
    <br/>
    {#each licenses as license}
        <label>
            <input type="checkbox" name="minLicense" value={license} />
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
