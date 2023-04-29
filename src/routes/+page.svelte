<script>
    import { userLocale } from "$lib/stores";
    import MetaTags from "$lib/components/MetaTags.svelte";
    import YouTube from "../lib/components/YouTube.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import Item from "$lib/components/Item.svelte";
    import TrackItem from "$lib/components/TrackItem.svelte";
    import { checkStringIncludes } from "$lib/utils"

    export let data;

    let searchInput = "";
    let itemsPerPage = 15;
    let pageNumber = 1;

    $: filteredEntries = data.entries.filter((entry, index) =>
        checkStringIncludes(entry.name[$userLocale], searchInput)
    );

    $: maxPages = Math.ceil(filteredEntries.length / itemsPerPage);

    $: if (pageNumber > maxPages && maxPages > 0) pageNumber = maxPages;

    $: entries = filteredEntries.filter(
        (_, index) =>
            index > itemsPerPage * pageNumber - itemsPerPage - 1 &&
            index < itemsPerPage * pageNumber
    );
</script>

<MetaTags
    title="Welcome"
    description="A KartRider: Drift online resource. Browse karts, characters, accessories, tracks, and more!"
/>

<h1>Welcome to Kart Cafe!</h1>
<input
    class="box surface"
    type="text"
    placeholder={`Search for karts, characters, accessories, and tracks`}
    bind:value={searchInput}
/>

<!-- Items 140, Tracks 230 -->
<ItemMenu itemWidth="140">
    {#each entries as entry}
        {#if entry.entry_type !== 3}
            <Item item={entry} />
        {/if}
    {/each}
</ItemMenu>
<ItemMenu itemWidth="230">
    {#each entries as entry}
        {#if entry.entry_type === 3}
            <TrackItem track={entry} />
        {/if}
    {/each}
</ItemMenu>

<div class="flex">
    <button
        class="box surface"
        on:click={() => pageNumber--}
        disabled={pageNumber <= 1}>Previous</button
    >
    <div class="grid">
        <span>Page {pageNumber} of {maxPages}</span>
        <span>
            Showing {itemsPerPage * pageNumber - itemsPerPage + 1} - {itemsPerPage *
                pageNumber -
                itemsPerPage +
                entries.length} of {filteredEntries.length}
        </span>
    </div>
    <button
        class="box surface"
        on:click={() => pageNumber++}
        disabled={pageNumber >= maxPages}>Next</button
    >
</div>

<!-- <h2>Featured Video</h2>
<YouTube
    id="wLZNerE4Vs8"
    title="Drift Tutorial: How to drift"
    caption="donutKR teaches us the basics of drifting techniques."
/> -->

<style lang="scss">
    input[type="text"].surface {
        color: var(--text1);
        font: inherit;
    }

    .flex {
        gap: 1rem;
        justify-content: center;
        // justify-content: space-between;
    }

    .grid {
        justify-items: center;
        color: var(--highlight);

        span:nth-of-type(2) {
            color: var(--text2);
            font-size: 0.9rem;
        }
    }
</style>
