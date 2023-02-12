<script>
    import { onMount } from "svelte";
    export let data;

    const stuff = [];
    let group = [];
    let container;

    onMount(() => {
        const elements = document.querySelectorAll("h2, h2~*:not(footer)");

        // Group every H2 with its subsequent contents
        elements.forEach((el) => {
            if (el.tagName === "H2" && group.length > 0) {
                stuff.push(group);
                group = [];
            }
            group.push(el);
        });
        stuff.push(group);

        // Wrap each group and add to DOM
        for (const grp of stuff) {
            let div = document.createElement("div");
            div.classList.add("box", "surface");
            for (const el of grp) {
                div.appendChild(el);
            }
            container.appendChild(div);
        }
    });
</script>

<h1>Changelog</h1>
<div id="changelog" class="grid" bind:this={container} />
<div class="visually-hidden">
    <svelte:component this={data.content} />
</div>

<style lang="scss" global>
    #changelog {
        gap: 1rem;

        h2 {
            margin: 0;
            font-size: 1.17rem;
        }
    }
</style>
