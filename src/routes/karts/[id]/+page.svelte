<script>
    export let data;
</script>

<div class="full-bleed grid">
    <h1>{data.name}</h1>
    <img src={data.imgSrc} alt="" width="408" height="380" loading="lazy" />
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
