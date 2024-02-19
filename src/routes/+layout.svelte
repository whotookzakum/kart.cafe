<script>
    import { GoogleAnalytics } from '@beyonk/svelte-google-analytics'
    import "$lib/styles/globals.scss";
    import Navigation from "$lib/components/layout/Navigation.svelte";
    import PageFooter from "$lib/components/layout/PageFooter.svelte";
</script>

<GoogleAnalytics properties={['G-B4YBFZGNVP']} />

<Navigation />
<main>
    <slot />
</main>
<PageFooter />
<img
    class="bg-img"
    src="/UI/CustomGame/_Res/Sprites/CustomGame_ModeSelect_Squad_Highlight.png"
    alt=""
    width="550"
    height="300"
    loading="lazy"
/>

<style global lang="scss">
    main {
        margin: auto;
        display: grid;
        width: calc(100% - 2rem);
        max-inline-size: 1100px;
        gap: 1rem;
    }

    .bg-img {
        position: fixed;
        z-index: -1;
        bottom: 0;
        right: -100px;
        user-select: none;
        pointer-events: none;
        opacity: 0.25;
    }
</style>
