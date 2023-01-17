<script>
    import Item from "$lib/components/Item.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";

    export let data;
    const characters = data.items;
</script>

<div class="full-bleed grid">
    <h1>Characters</h1>
    <ItemMenu itemWidth="140">
        {#each characters as character}
            <Item
                imgSrc={`ItemIcon/character/Character_${character.id}`}
                name={character.name}
            />
        {/each}
    </ItemMenu>
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
