<script>
    import Item from "$lib/components/Item.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
</script>

<div class="full-bleed grid">
    <h1>Tracks</h1>
    <ItemMenu itemWidth="240">
        <Item imgSrc="/images/Track/Loading/Beach_R01.png" name="map" href={`/tracks`} />
        <Item imgSrc="/images/Track/Loading/Desert_I02.png" name="map" href={`/tracks`} />
        <Item imgSrc="/images/Track/Loading/Mine_R04.png" name="map" href={`/tracks`} />
        <Item imgSrc="/images/Track/Loading/Moonhill_I04.png" name="map" href={`/tracks`} />
        <Item imgSrc="/images/Track/Loading/World_R01.png" name="map" href={`/tracks`} />
    </ItemMenu>
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
