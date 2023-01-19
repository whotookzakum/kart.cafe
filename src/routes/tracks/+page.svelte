<script>
    import TrackItem from "$lib/components/TrackItem.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";

    export let data;
    const tracks = data.items;
</script>

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
