<script>
    import { browser } from "$app/environment";
    export let poster;

    let modelViewer;

    function handleClick() {
        modelViewer.dismissPoster();
    }

    function handleLoad() {
        const material = modelViewer.model.materials[7];
        
        const createAndApplyTexture = async (channel, texSrc) => {
            const texture = await modelViewer.createTexture(texSrc);
            if (channel.includes("base") || channel.includes("metallic")) {
                material.pbrMetallicRoughness[channel].setTexture(texture);
            } else {
                material[channel].setTexture(texture);
            }
        };

        createAndApplyTexture("baseColorTexture", "/ART/Character/Bazzi/Costume/Default/Tex_Bazzi_Bag_D.png");
        // createAndApplyTexture("metallicRoughnessTexture", "/ART/Character/Bazzi/Costume/Default/Tex_Bazzi_Bag_MT.png");
        // createAndApplyTexture("normalTexture", "/ART/Character/Bazzi/Costume/Default/Tex_Bazzi_Bag_N.png");
        // createAndApplyTexture("occlusionTexture", "/ART/Character/Bazzi/Costume/Default/Tex_Bazzi_Bag_D.png");
        // createAndApplyTexture("emissiveTexture", "/ART/Character/Bazzi/Costume/Default/Tex_Bazzi_Bag_D.png");
        
        
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
    on:load={handleLoad}
    class="box surface"
    alt=""
    src={`/ART/Character/Bazzi/Costume/Default/Mesh_Bazzi.gltf`}
    ar
    reveal="manual"
    shadow-intensity="1"
    camera-controls
    touch-action="pan-y"
>
    <div id="poster-content" slot="poster">
        <div
            id="lazy-load-poster"
            slot="poster"
            style={`background-image: url(${poster})`}
        />
        <button
            id="button-load"
            class="box surface hover"
            slot="poster"
            on:click={handleClick}>Load 3D Model</button
        >
    </div>
</model-viewer>

<div class="controls">
    <div>
        <p>Diffuse</p>
        <select id="diffuse">
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/DamagedHelmet/glTF/Default_albedo.jpg"
                >Damaged helmet</option
            >
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/Lantern/glTF/Lantern_baseColor.png"
                >Lantern Pole</option
            >
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/WaterBottle/glTF/WaterBottle_baseColor.png"
                >Water Bottle</option
            >
        </select>
    </div>
    <div>
        <p>Metallic-roughness</p>
        <select id="metallicRoughness">
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/DamagedHelmet/glTF/Default_metalRoughness.jpg"
                >Damaged helmet</option
            >
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/Lantern/glTF/Lantern_roughnessMetallic.png"
                >Lantern Pole</option
            >
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/WaterBottle/glTF/WaterBottle_occlusionRoughnessMetallic.png"
                >Water Bottle</option
            >
        </select>
    </div>
    <div>
        <p>Normals</p>
        <select id="normals">
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/DamagedHelmet/glTF/Default_normal.jpg"
                >Damaged helmet</option
            >
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/Lantern/glTF/Lantern_normal.png"
                >Lantern Pole</option
            >
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/WaterBottle/glTF/WaterBottle_normal.png"
                >Water Bottle</option
            >
        </select>
    </div>
    <div>
        <p>Occlusion</p>
        <select id="occlusion">
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/DamagedHelmet/glTF/Default_AO.jpg"
                >Damaged helmet</option
            >
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/WaterBottle/glTF/WaterBottle_occlusionRoughnessMetallic.png"
                >Water Bottle</option
            >
        </select>
    </div>
    <div>
        <p>Emission</p>
        <select id="emission">
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/DamagedHelmet/glTF/Default_emissive.jpg"
                >Damaged helmet</option
            >
            <option
                value="../../shared-assets/models/glTF-Sample-Models/2.0/Lantern/glTF/Lantern_emissive.png"
                >Lantern Pole</option
            >
            <option
                value="/ART/Character/Bazzi/Costume/Default/Tex_Bazzi_Bag_D.png"
                >Water Bottle</option
            >
        </select>
    </div>
</div>

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
