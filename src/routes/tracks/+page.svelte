<script>
    import TrackItem from "$lib/components/TrackItem.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import _ from "lodash";
    import TrackDifficulty from "$lib/components/TrackDifficulty.svelte";

    export let data;

    const activeFilters = {
        theme: "All",
        difficulties: [1, 2, 3, 4, 5],
        modes: ["Speed", "Item"],
        licenses: ["None", "B2", "B1", "L3"],
    };

    $: tracks = data.items
        .filter(
            (track) =>
                activeFilters.theme === "All" ||
                activeFilters.theme.includes(track.theme)
        )
        .filter(
            (track) =>
                activeFilters.difficulties.includes(track.difficulty) ||
                activeFilters.difficulties.length === 5
        )
        .filter(
            (track) =>
                (activeFilters.modes.includes("Item") && track.itemMode) ||
                (activeFilters.modes.includes("Speed") && !track.itemMode)
        )
        .filter((track) =>
            activeFilters.licenses.includes(track.reqLicense || "None")
        );

    function resetFilters() {
        activeFilters.theme = "All";
        activeFilters.difficulties = [1, 2, 3, 4, 5];
        activeFilters.modes = ["Speed", "Item"];
        activeFilters.licenses = ["None", "B2", "B1", "L3"];
    }
</script>

<div class="box surface">
    <h2>Filter Tracks</h2>
    <button class="box surface" on:click={resetFilters}>Reset</button>

    <h3>Theme</h3>
    <select class="surface box" name="" id="" bind:value={activeFilters.theme}>
        <option value="All">All</option>
        {#each _.uniqBy(data.items, (t) => t.theme).map((t) => t.theme) as theme}
            <option value={theme}>{theme}</option>
        {/each}
    </select>

    <h3>Difficulty</h3>
    {#each [1, 2, 3, 4, 5] as difficulty}
        <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="difficulty"
                value={difficulty}
                bind:group={activeFilters.difficulties}
            />
            <TrackDifficulty {difficulty} />
        </label>
    {/each}

    <h3>Game Mode</h3>
    {#each ["Speed", "Item"] as mode}
        <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="modes"
                value={mode}
                bind:group={activeFilters.modes}
            />
            <img
                src={`/images/Lobby/_Res/Sprites/Lobby_MatchBtn_Icon${mode}.png`}
                alt="Speed"
                width="32"
                height="32"
            />
        </label>
    {/each}

    <h3>License</h3>
    {#each ["None", "B2", "B1", "L3"] as license}
        <label>
            <input
                class="visually-hidden"
                type="checkbox"
                name="reqLicense"
                value={license}
                bind:group={activeFilters.licenses}
            />
            {#if license === "None"}
                {license}
            {:else}
                <img
                    src={`/images/Common/_Res/Texture/License_${license}_Simple.png`}
                    alt={license}
                    width="24"
                    height="27"
                />
            {/if}
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
