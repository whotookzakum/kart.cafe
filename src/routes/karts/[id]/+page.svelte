<script>
    import enUSLocale from "$lib/locale/en-US.json"

    export let data;
</script>

<div class="full-bleed grid">
    <h1>{enUSLocale.String[`Item_Kart:${data.id}_NAME`]}</h1>
    <img src={data.imgSrc} alt="" width="408" height="380" loading="lazy" />
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
