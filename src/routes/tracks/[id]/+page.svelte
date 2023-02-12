<script>
    import Modal from "$lib/components/layout/Modal.svelte";
    import ItemDropTable from "$lib/components/misc/ItemDropTable.svelte";
    export let data;
</script>

<h1>{data.name}</h1>

<Modal>
    <div class="grid outer-grid">
        <h1>{data.name}</h1>
        <img src={data.imgSrc} alt="">

        <section>
            {#if data.itemMode}
                <h2>Item Mode drop rates (8 players)</h2>

                <h3>Squad</h3>
                <ItemDropTable mode="squad" />

                <h3>Duo</h3>
                <ItemDropTable mode="duo" />

                <h3>Solo</h3>
                <ItemDropTable mode="solo" />
            {/if}
        </section>
    </div>
</Modal>

<style>
    img {
        max-width: 100%;
    }
</style>