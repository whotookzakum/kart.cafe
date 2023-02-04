<script>
    import { browser } from "$app/environment";
    export let modelSrc, poster;

    if (browser) {
        // document
        // .querySelector("#button-load")
        // .addEventListener("click", () =>
        //     document.querySelector("#lazy-load").dismissPoster()
        // );
    }
    let modelViewer;

    function handleClick() {
        modelViewer.dismissPoster();
    }
</script>

<svelte:head>
    <script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
    ></script>
</svelte:head>

<model-viewer
    id="model-viewer"
    bind:this={modelViewer}
    class="box surface"
    alt=""
    src={`/${modelSrc}.glb`}
    ar
    reveal="manual"
    shadow-intensity="1"
    camera-controls
    touch-action="pan-y"
>
    <div id="poster-content" slot="poster">
        <div id="lazy-load-poster" slot="poster" style={`background-image: url(${poster})`} />
        <button
            id="button-load"
            class="box surface hover"
            slot="poster"
            on:click={handleClick}>Load 3D Model</button
        >
    </div>
</model-viewer>

<style lang="scss">
    #model-viewer {
        width: 100%;
        height: auto;
        aspect-ratio: 408/380;
        padding: 0;
        box-sizing: content-box;
    }

    #poster-content {
        display: grid;
        place-items: center;
        align-items: flex-end;
        padding: 1rem;
        height: 100%;
        position: relative;
    }

    #lazy-load-poster {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.9;
    }

    #button-load {
        z-index: 100;
        width: 100%;
    }
</style>
