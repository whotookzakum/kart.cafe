<script>
    export let track, name;
</script>

<li class="box surface">
    <img
        class="bg"
        src={track.imgSrc}
        alt={name}
        width="408"
        height="380"
        loading="lazy"
    />
    <a href={`/tracks/${track.id}`}>
        <span>{name}</span>
    </a>
    {#if track.difficulty}
        <div class="top-left">
            {#if track.reqLicense}
                <img
                    class="license-level"
                    src={`/images/Common/_Res/Texture/License_${track.reqLicense}_Simple.png`}
                    alt={track.reqLicense}
                    width="330"
                    height="367"
                />
            {/if}
            <div class="difficulty">
                {#each { length: 5 } as _, i}
                    <i class="dot" class:fill={i < track.difficulty} />
                {/each}
            </div>
        </div>
        <div class="modes">
            <img
                src="/images/Lobby/_Res/Sprites/Lobby_MatchBtn_IconSpeed.png"
                alt="Speed mode"
                width="24"
                height="24"
            />
            {#if track.itemMode}
                <img
                    src="/images/Lobby/_Res/Sprites/Lobby_MatchBtn_IconItem.png"
                    alt="Item mode"
                    width="24"
                    height="24"
                />
            {/if}
        </div>
    {/if}
</li>

<style lang="scss">
    li {
        position: relative;
        transition: all 0.1s linear;
        padding: 0;
        overflow: hidden;
        filter: grayscale(0.3) brightness(1);

        &:hover, &:focus-within {
            background: var(--surface2);
            border-color: var(--surface3);
            transform: translateY(-4px);
            filter: grayscale(0) brightness(1);
            // border-color: var(--accent);
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

    .top-left {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
    }

    .difficulty {
        display: flex;
        gap: 0.25rem;
        padding: 0.25rem;
        border-radius: 3px;
        background: rgba(34, 34, 34, 0.6);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .dot {
        display: block;
        height: 12px;
        width: 12px;
        background: #808080;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
        border-radius: 50%;

        &.fill {
            background: radial-gradient(
                circle at top left,
                #ffd42a,
                var(--accent)
            );
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7),
                inset 0 1px 3px rgba(255, 187, 0, 0.5);
        }
    }

    .license-level {
        width: 22px;
        height: auto;
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.4))
    }

    img.bg {
        width: 100%;
        height: auto;
        display: block;
    }

    .modes {
        display: grid;
        gap: 0.25rem;
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;

        img {
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
        }
    }
</style>
