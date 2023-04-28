<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import YouTube from "../lib/components/YouTube.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import Item from "$lib/components/Item.svelte"
    import TrackItem from "$lib/components/TrackItem.svelte"

    export let data;

    console.log(data);

    let searchCategory = "karts";
</script>

<MetaTags
    title="Welcome"
    description="A KartRider: Drift online resource. Browse karts, characters, accessories, tracks, and more!"
/>

<h1>Welcome to Kart Cafe!</h1>
<input
    class="box surface"
    type="text"
    name=""
    id=""
    placeholder={`Search ${searchCategory}`}
/>

<!-- Items 140, Tracks 230 -->
<ItemMenu itemWidth="230">
    {#each data.entries as entry}
        {#if entry.entry_type === 3}
            <TrackItem track={entry} />
        {:else}
            <Item item={entry} />
        {/if}
    {/each}
</ItemMenu>

<h2>Featured Video</h2>
<YouTube
    id="wLZNerE4Vs8"
    title="Drift Tutorial: How to drift"
    caption="donutKR teaches us the basics of drifting techniques."
/>

<style lang="scss">
    input[type="text"].surface {
        color: var(--text1);
        font: inherit;
    }
</style>
