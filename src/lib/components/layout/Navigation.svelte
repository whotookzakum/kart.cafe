<script>
    import TimeUntilReset from "../misc/TimeUntilReset.svelte";
</script>

<nav class="surface box">
    <a class="logo-wrapper" href="/">
        <img src="/images/boz.png" alt="" height="72" />
        <div class="grid">
            <span>Kart</span>
            <strong>Cafe <span class="beta-mark">BETA</span></strong>
        </div>
    </a>
    <div class="links">
        <a href="/karts">Karts</a>
        <hr />
        <a href="/characters">Characters</a>
        <hr />
        <a href="/accessories">Accessories</a>
        <hr />
        <a href="/tracks">Tracks</a>
    </div>
    <div class="timer-wrapper grid">
        <span>Time until reset</span>
        <TimeUntilReset />
    </div>
</nav>

<style lang="scss">
    nav {
        position: sticky;
        z-index: 10;
        top: 0;
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        align-items: center;
        border: unset;
        border-bottom: 1px solid var(--surface2);
        overflow: hidden;
        line-height: 1.1;
        border-radius: 0;
    }

    .beta-mark {
        font-weight: 600;
        text-shadow: 0 0 3px rgba(0, 0, 0, 0.438);
        color: var(--highlight);
        font-size: 0.9rem;
    }

    .logo-wrapper,
    .links {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    .logo-wrapper {
        img {
            transition: all 0.3s ease;
            margin-bottom: -1rem;
        }

        strong {
            font-size: 1.23rem;
        }

        &:active img {
            transform: translateY(4px);
        }
    }

    .timer-wrapper {
        text-align: right;

        span {
            font-size: 0.9rem;
            color: var(--highlight);
        }
    }

    a {
        color: var(--text1);
        border: none;
    }

    .links a {
        padding: 0.5rem;
    }

    hr {
        height: 24px;
        width: 1px;
        margin: 0;
        border: none;
        background: var(--surface3);
    }
</style>
