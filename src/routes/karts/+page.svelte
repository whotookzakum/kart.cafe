<script>
    import Item from "$lib/components/Item.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";

    export let data
    const karts = data.items
</script>

<div class="full-bleed grid">
    <h1>Karts</h1>
    <ItemMenu itemWidth="140">
        {#each karts as kart}
            <Item
                imgSrc={kart.imgSrc}
                name={kart.name}
                href={`/karts/${kart.id}`}
            />
        {/each}
    </ItemMenu>
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
