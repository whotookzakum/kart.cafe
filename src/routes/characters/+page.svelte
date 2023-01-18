<script>
    import Item from "$lib/components/Item.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import enUSLocale from "$lib/locale/en-US.json"

    export let data;
    const characters = data.items;
</script>

<div class="full-bleed grid">
    <h1>Characters</h1>
    <ItemMenu itemWidth="140">
        {#each characters as character}
            <Item
                imgSrc={character.imgSrc}
                name={enUSLocale.String[`Item_Character:${character.id}_NAME`]}
                href={`/characters/${character.id}`}
            />
        {/each}
    </ItemMenu>
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
