<script>
    import TimeUntilReset from "../misc/TimeUntilReset.svelte";
</script>

<nav>
    <a class="logo-wrapper" href="/">
        <img src="/images/boz.png" alt="" height="72" />
        <div class="grid">
            <span>Kart</span>
            <strong>Cafe</strong>
        </div>
    </a>
    <div class="links">
        <a href="/">Karts</a>
        <hr />
        <a href="/">Characters</a>
        <hr />
        <a href="/">Accessories</a>
        <hr />
        <a href="/">Tracks</a>
    </div>
    <div class="timer-wrapper grid">
        <span>Time until reset</span>
        <strong><TimeUntilReset /></strong>
    </div>
</nav>

<style lang="scss">
    nav {
        position: sticky;
        top: 0;
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        align-items: center;
        background: hsl(219, 70%, 23%);
        border-bottom: 1px solid hsl(219, 70%, 25%); // hsl(219, 70%, 35%);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.17);
        overflow: hidden;
        line-height: 1.1;
    }

    .logo-wrapper,
    .links {
        display: flex;
        gap: 1rem;
        align-items: center;
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
            color: skyblue;
        }
    }

    hr {
        height: 24px;
        width: 1px;
        border: none;
        background: hsl(219, 70%, 35%);
    }

    strong {
        font-weight: 600;
    }
</style>
