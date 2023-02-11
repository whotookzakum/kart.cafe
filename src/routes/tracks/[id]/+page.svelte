<script>
    import ItemDropTable from "$lib/components/misc/ItemDropTable.svelte";
</script>

<h2>Item Mode drop rates (8 players)</h2>

<h3>Squad</h3>
<ItemDropTable mode="squad" />

<h3>Duo</h3>
<ItemDropTable mode="duo" />

<h3>Solo</h3>
<ItemDropTable mode="solo" />