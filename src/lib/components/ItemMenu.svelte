<script>
    export let itemWidth = 120;
</script>

<ul class="grid" style={`grid-template-columns: repeat(auto-fill, minmax(${itemWidth}px, 1fr));`}>
    <slot />
</ul>

<style>
    ul.grid {
        gap: 1rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>