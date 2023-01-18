<script>
    export let track, name;
</script>

<li class="box surface">
    <img class="bg" src={track.imgSrc} alt={name} width="408" height="380" loading="lazy" />
    <a href={`/tracks/${track.id}`}>
        <span>{name}</span>
    </a>
    <span class="difficulty">
        {#each { length: track.difficulty } as _}
            <i class="circle" />
        {/each}
    </span>
    <div class="modes">
        <img src="/images/Lobby/_Res/Sprites/Lobby_MatchBtn_IconSpeed.png" alt="Speed mode" width="18" height="18">
        <img src="/images/Lobby/_Res/Sprites/Lobby_MatchBtn_IconItem.png" alt="Item mode" width="18" height="18">
    </div>
</li>

<style lang="scss">
    li {
        position: relative;
        transition: all 0.1s linear;
        padding: 0;
        overflow: hidden;
        filter: grayscale(0.3) brightness(1);

        &:hover {
            background: var(--surface2);
            border-color: var(--surface3);
            transform: translateY(-4px);
            filter: grayscale(0) brightness(1.1);
        }
    }

    a {
        // display: block;
        width: 100%;
        color: inherit;
        border: none;

        // Clickable everywhere
        &::before {
            content: "";
            inset: 0;
            position: absolute;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
            // background: linear-gradient(rgba(0, 0, 0, 0.5), transparent);
        }

        span {
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 0.5em;
            font-weight: 500;
            font-size: 1.13rem;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }
    }

    .difficulty {
        display: flex;
        gap: 0.25rem;
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        background: rgba(34, 34, 34, 0.5);
        padding: 0.25rem;
        border-radius: 3px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .circle {
        display: block;
        height: 12px;
        width: 12px;
        background: radial-gradient(circle at top left, gold, var(--accent));
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7), inset 0 1px 3px rgba(255, 187, 0, 0.5);
        border-radius: 50%;
    }

    img.bg {
        width: 100%;
        height: auto;
        display: block;
    }

    .modes {
        display: flex;
        gap: 0.25rem;
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        
        img {
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        }
    }
</style>
