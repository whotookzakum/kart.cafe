<script>
    import Item from "$lib/components/Item.svelte";
    import karts from "$lib/data/karts.json";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
</script>

<div class="full-bleed grid">
    <h1>Karts</h1>
    <ItemMenu itemWidth="140">
        {#each karts as kart}
            <Item
                imgSrc={`ItemIcon/kart/Kart_${kart.id}`}
                name={kart.name}
            />
        {/each}
    </ItemMenu>
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
