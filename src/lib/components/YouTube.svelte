<script>
    export let title, id, wide, caption;
</script>

<figure class:full-bleed={wide}>
    <iframe
        class="box surface"
        {title}
        src="https://www.youtube.com/embed/{id}"
        allow="fullscreen"
    />
    {#if caption}
        <figcaption>{caption}</figcaption>
    {/if}
</figure>

<style>
    iframe {
        width: 100%;
        border: none;
        aspect-ratio: 16/9;
        padding: 0;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    }
</style>
