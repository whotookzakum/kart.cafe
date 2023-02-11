<script>
    import Modal from "$lib/components/layout/Modal.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import Item from "$lib/components/Item.svelte";
    import ModelViewer from "../../../lib/components/ModelViewer.svelte";

    export let data;
    const { emotes } = data;
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
                <select class="surface box" name="" id="" disabled={Object.keys(emotes).length < 1}>
                    <option value="">Default</option>
                    <option value="">Idle</option>
                    {#each Object.keys(emotes) as key}
                        <optgroup label={key.charAt(0).toUpperCase() + key.slice(1)}>
                            {#each emotes[key] as emote}
                                <option value="">
                                    {emote.name.split(` (${data.name}`)[0]}
                                </option>
                            {/each}
                        </optgroup>
                    {/each}
                </select>
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
