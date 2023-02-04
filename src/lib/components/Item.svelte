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
        transition: all 0.1s linear;

        &:hover, &:focus-within {
            transform: translateY(-4px);
        }
    }

    :global(.surface .item.surface:hover) {
        background: var(--surface3);
        border-color: var(--surface4, hsl(219, 70%, 45%));
    }

    a {
        color: inherit;
        border: none;

        // Clickable everywhere
        &::before {
            content: "";
            inset: 0;
            position: absolute;
        }
    }

    img {
        margin-bottom: 0.5rem;
        width: 100%;
        height: auto;
    }
</style>
