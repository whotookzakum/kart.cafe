<script>
    export let modelName;
</script>

<svelte:head>
    <script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    ></script>
</svelte:head>

<model-viewer
    alt="Helena"
    src={`/${modelName}.glb`}
    ar
    shadow-intensity="1"
    camera-controls
    touch-action="pan-y"
/>
