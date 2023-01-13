<script>
    import "$lib/styles/globals.scss";
    import Navigation from "$lib/components/layout/Navigation.svelte";
    import PageFooter from "$lib/components/layout/PageFooter.svelte";
</script>

<Navigation />
<main>
    <slot/>
    <PageFooter />
</main>

<style global lang="scss">
    main {
        margin: auto;
        display: grid;
        grid-template-columns: 1fr min(60ch, calc(100% - 2rem)) 1fr;
        max-inline-size: 800px;
        gap: 1rem;

        & > * {
            grid-column: 2;
        }

        & > .full-bleed {
            grid-column: 1 / -1;
        }
    }
</style>