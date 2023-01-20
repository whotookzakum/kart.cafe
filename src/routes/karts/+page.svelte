<script>
    import Item from "$lib/components/Item.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import enUSLocale from "$lib/locale/en-US.json"

    export let data
    const karts = data.items
</script>

<div class="full-bleed grid">
    <h1>Karts</h1>
    <ItemMenu itemWidth="140">
        {#each karts as kart}
            <Item
                imgSrc={kart.imgSrc}
                name={enUSLocale.String[`Item_Kart:${kart.id}_NAME`]}
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
