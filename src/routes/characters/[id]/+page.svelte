<script>
    import Modal from "$lib/components/layout/Modal.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import Item from "$lib/components/Item.svelte";
    import ModelViewer from "../../../lib/components/ModelViewer.svelte";

    export let data;

    let emotesType = 1;

    $: emotes = data.emotes.filter(e => e.type === emotesType)

</script>

<Modal>
    <div class="grid outer-grid">
        <section class="grid" id="model">
            <h2>{data.name}</h2> 
            <ModelViewer poster={data.imgSrc} modelSrc="boz" />
        </section>

        <section class="grid" id="emotes">
            <h3>Emotes</h3>
            <div>
                <label>
                    <input type="radio" bind:group={emotesType} value={1} checked> Standing
                </label>
                <label>
                    <input type="radio" bind:group={emotesType} value={2}> Sitting
                </label>

                <ItemMenu itemWidth="96">
                    {#each emotes as emote}
                        <Item imgSrc={emote.imgSrc} name={emote.name} />
                    {/each}
                </ItemMenu>
            </div>
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
