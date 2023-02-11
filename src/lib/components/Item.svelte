<script>
    export let imgSrc, name, href;
</script>

<li class="item box surface hover">
    <img src={imgSrc} alt="" width="408" height="380" loading="lazy" />
    <a {href}>{name}</a>
</li>

<style lang="scss">
    li {
        position: relative;
        text-align: center;
        transition: transform 0.1s linear;
        overflow: hidden;

        &:hover, &:focus-within {
            transform: translateY(-4px);
        }

        &:focus-within {
            outline: 2px solid var(--accent);
        }
    }

    a {
        color: inherit;
        border: none;
        outline: none;

        // Clickable everywhere
        &::before, &::after {
            content: "";
            inset: 0;
            position: absolute;
        }

        &::after {
            z-index: -1;
            transition: all 0.1s linear;
        }
    }

    img {
        margin-bottom: 0.5rem;
        width: 100%;
        height: auto;
    }
</style>
