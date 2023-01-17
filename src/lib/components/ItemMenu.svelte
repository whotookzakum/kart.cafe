<script>
    export let itemWidth  = 120;
</script>

<menu class="grid" style={`grid-template-columns: repeat(auto-fill, minmax(${itemWidth}px, 1fr));`}>
    <slot />
</menu>

<style>
    menu.grid {
        gap: 1rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>