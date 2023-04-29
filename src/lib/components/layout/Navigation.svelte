<script>
    import { userLocale } from "$lib/stores";
    import TimeUntilReset from "../misc/TimeUntilReset.svelte";
    let selectedLocale = "en_US"

    $: userLocale.set(selectedLocale)
</script>

<nav class="surface box">
    <a class="logo-wrapper" href="/">
        <img src="/images/boz.png" alt="" height="89" />
        <span class="grid" role="text">
            <span>Kart</span>
            <span class="bold">Cafe <span class="beta-mark">BETA</span></span>
        </span>
    </a>
    <div class="links">
        <a href="/">Home</a>
        <hr />
        <a href="/">Guides</a>
        <hr />
        <a href="/">Test</a>
        <hr />
        <select class="surface" name="" id="" bind:value={selectedLocale}>
            <option value="en_US">English</option>
            <option value="ko_KR">한국어</option>
            <option value="ja_JP">日本語</option>
            <option value="zh_Hans">简化字</option>
            <option value="zh_Hant">繁体字</option>
            <option value="th_TH">ไทย</option>
            <option value="es_419">Español</option>
            <option value="de_DE">Deutsch</option>
            <option value="it_IT">Italiano</option>
            <option value="fr_FR">François</option>
            <option value="pt_BR">Português</option>
        </select>
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
        padding-block: 0;
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
        align-items: center;
        justify-content: center;
    }

    .links {
        gap: 1rem;
    }

    .logo-wrapper {
        img {
            transition: all 0.3s ease;
        }

        .bold {
            font-weight: 500;
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

    select {
        background: var(--surface1);
        border: none;
    }
</style>
