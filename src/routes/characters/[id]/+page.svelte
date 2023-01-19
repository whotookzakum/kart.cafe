<script>
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import Item from "$lib/components/Item.svelte";

    export let data;
</script>

<div class="full-bleed grid">
    <h1>{data.name}</h1>
    <img src={data.imgSrc} alt="" width="408" height="380" loading="lazy" />

    {#if data.costumes.length > 0}
        <h2>Costumes</h2>
        <ItemMenu itemWidth="120">
            {#each data.costumes as costume}
                <Item imgSrc={costume.imgSrc} name={costume.rarity} />
            {/each}
        </ItemMenu>
    {/if}
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
