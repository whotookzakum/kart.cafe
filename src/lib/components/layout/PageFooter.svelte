<script>
    import Icon from "@iconify/svelte";
</script>

<footer class="flex">
    <span>&copy; 2023 Kart Cafe.</span>
    <div>
        <a
            href="https://github.com/whotookzakum/kart.cafe"
            target="_blank"
            rel="noreferrer noopener nofollow"
            title="View code on Github"
        >
            <Icon icon="mdi:github" width="24" height="24" />
        </a>
    </div>
</footer>

<style lang="scss">
    footer {
        width: calc(100% - 2rem);
        max-inline-size: 800px;
        margin: auto;
        color: var(--text2);
        line-height: 1.5;
        font-size: 0.9rem;
        justify-content: space-between;
        padding-top: 1rem;
        padding-bottom: 5vmin;
        // background: #222;
    }

    .flex {
        align-items: center;
        gap: 0.25rem;
    }

    a {
        color: inherit;
        border: none;
        text-decoration: underline;

        &:hover,
        &:focus-visible {
            color: var(--accent);
        }
    }
</style>
