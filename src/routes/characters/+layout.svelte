<script>
    import Item from "$lib/components/Item.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import { fetchCharacters } from "$lib/utils";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    
    // $page.data to use data from a +page.js
    // However if a nested route is visited, this +page.js isn't run so the data is never sent to the layout
    // Fetch the data directly in +layout.svelte so that it's always available
    // OR
    // Have the nested route's +page.js also pass $page.data.items the same way

    // const characters = $page.data.items;
    // let characters;
    // onMount(async () => {
    //     characters = await fetchCharacters();
    //     console.log(characters);
    // });
</script>


<slot />

<div class="full-bleed grid">
    <h1>Characters</h1>

    {#await fetchCharacters()}
        <!-- promise is pending -->
    {:then characters}
        <ItemMenu itemWidth="140">
            {#each characters as character}
                <Item
                    imgSrc={character.imgSrc}
                    name={character.name}
                    href={`/characters/${character.id}`}
                />
            {/each}
        </ItemMenu>
    {/await}
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
