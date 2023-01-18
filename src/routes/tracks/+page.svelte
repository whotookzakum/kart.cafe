<script>
    import TrackItem from "$lib/components/TrackItem.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import enUSLocale from "$lib/locale/en-US.json";

    export let data;
    const tracks = data.items;
</script>

<div class="full-bleed grid">
    <h1>Tracks</h1>
    <ItemMenu itemWidth="240">
        {#each tracks as track}
            <TrackItem
                {track}
                name={enUSLocale.String[`TrackName2_${track.id}`]}
            />
        {/each}
    </ItemMenu>
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
