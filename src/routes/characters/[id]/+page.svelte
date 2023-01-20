<script>
    import Modal from "$lib/components/layout/Modal.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import Item from "$lib/components/Item.svelte";
    import ModelViewer from "../../../lib/components/ModelViewer.svelte";

    export let data;
</script>

<Modal>
    <div class="grid outer-grid">
        <section class="grid" id="model">
            <h2 style="grid-column: 1/-1">{data.name}</h2>
            <ModelViewer poster={data.imgSrc} modelSrc="boz" />
        </section>

        <section class="grid" id="emotes">
            <h3>Emotes</h3>
            <div class="box surface"></div>
        </section>

        {#if data.costumes.length > 0}
            <section class="grid" id="costumes">
                <h3>Costumes</h3>
                <ItemMenu itemWidth="115">
                    {#each data.costumes as costume}
                        <Item imgSrc={costume.imgSrc} name={costume.name} />
                    {/each}
                </ItemMenu>
            </section>
        {/if}
    </div>
</Modal>

<style lang="scss">
    .grid {
        gap: 1rem 2rem;
        align-content: flex-start;
    }

    .outer-grid {
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    #costumes {
        grid-column: 1/-1;
    }
</style>
