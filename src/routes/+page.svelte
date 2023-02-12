<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { onMount } from "svelte";
    import YouTube from "../lib/components/YouTube.svelte";
    export let data;

    const stuff = [];
    let group = [];
    let container;

    onMount(() => {
        const elements = document.querySelectorAll(
            ".visually-hidden h2, .visually-hidden h2~*"
        );

        // Get only the first group
        elements.forEach((el, i) => {
            if (stuff.length > 0) return;
            if ((i > 0 && el.tagName === "H2") || i === elements.length - 1) {
                stuff.push(group);
            } else {
                group.push(el);
            }
        });

        // Wrap each group and add to DOM
        for (const el of stuff[0]) {
            // Replace h2 with h3
            if (el.tagName === "H2") {
                const h3 = document.createElement("h3")
                h3.textContent = el.textContent
                container.appendChild(h3)
            } else {
                container.appendChild(el);
            }
        }
    });
</script>

<MetaTags
    title="Welcome"
    description="A KartRider: Drift online resource. Browse karts, characters, accessories, tracks, and more!"
/>

<h1>Welcome to Kart Cafe!</h1>

<h2>Featured Video</h2>
<YouTube
    id="wLZNerE4Vs8"
    title="Drift Tutorial: How to drift"
    caption="donutKR teaches us the basics of drifting techniques."
/>

<h2>What's New</h2>
<div id="changelog" class="surface box">
    <div bind:this={container} />
    <a href="/changelog">View past updates</a>
</div>

<div class="visually-hidden">
    <svelte:component this={data.content} />
</div>