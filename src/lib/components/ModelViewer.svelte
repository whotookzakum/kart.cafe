<script>
    export let modelSrc, poster;
</script>

<svelte:head>
    <script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    ></script>
</svelte:head>

<model-viewer
    id="model-viewer"
    class="box surface"
    alt=""
    src={`/${modelSrc}.glb`}
    ar
    {poster}
    loading="eager"
    reveal="auto"
    shadow-intensity="1"
    camera-controls
    touch-action="pan-y"
/>

<style lang="scss">
    #model-viewer {
        width: 100%;
        height: auto;
        aspect-ratio: 408/380;
        padding: 0;
        box-sizing: content-box;
    }
</style>