<script>
    export let imgSrc, name, href;
</script>

<li class="box surface">
    <img src={imgSrc} alt={name} width="408" height="380" loading="lazy" />
    <a {href}>{name}</a>
</li>

<style lang="scss">
    li {
        position: relative;
        text-align: center;
        transition: all 0.1s linear;
        // padding: 0;
        overflow: hidden;

        &:hover {
            background: var(--surface2);
            border-color: var(--surface3);
            transform: translateY(-4px);
            // border-color: var(--accent);
        }
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
