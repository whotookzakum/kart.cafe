<script>
    export let imgSrc, name;
</script>

<li>
    <a href="/characters" class="box surface grid">
        <img src={`/images/${imgSrc}.png`} alt="" width="408" height="380" loading="lazy">
        <span>{name}</span>
    </a>
</li>

<style lang="scss">
    a {
        place-items: center;
        gap: 0.5rem;
        color: inherit;
        transition: all 0.1s linear;

        &:hover {
            transform: translateY(-4px);
        }
    }

    img {
        width: 100%;
        height: auto;
    }
</style>