<script>
    import Modal from "$lib/components/layout/Modal.svelte";
    import ModelViewer from "$lib/components/ModelViewer.svelte";

    export let data;
</script>

<Modal>
    <div class="grid outer-grid">
        <section class="grid" id="model">
            <h2>{data.name}</h2>
            <ModelViewer poster={data.imgSrc} modelSrc="boz" />
        </section>
        <section />
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
