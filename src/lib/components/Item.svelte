<script>
    import { userLocale } from "$lib/stores";
    export let item;
</script>

<li class="item box surface hover focus-within-outline">
    <img src={item.imgSrc} alt="" width="408" height="380" loading="lazy" />
    <a href="/">{item.name[$userLocale]}</a>
</li>

<style lang="scss">
    li {
        position: relative;
        text-align: center;
        transition: transform 0.1s linear, border 0.1s linear, background-color 0.1s linear;
        overflow: hidden;

        &:hover, &:focus-within {
            transform: translateY(-4px);
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
