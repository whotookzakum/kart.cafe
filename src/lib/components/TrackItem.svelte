<script>
    import enUSLocale from "$lib/locale/en-US.json";
    import TrackDifficulty from "./TrackDifficulty.svelte";
    export let track;
</script>

<li class="box surface hover">
    <img
        class="bg"
        src={track.imgSrc}
        alt={enUSLocale.String[`TrackName2_${track.id}`]}
        width="408"
        height="380"
        loading="lazy"
    />
    <a href={`/tracks/${track.id}`}>
        <span class="absolute">
            <span class="track-theme"
                >{enUSLocale.String[`TrackThemeName_${track.theme}`]}</span
            ><br />
            <span class="track-name"
                >{enUSLocale.String[`TrackName2_${track.id}`]}</span
            >
        </span>
    </a>
    {#if track.hasMinimap}
        <img
            class="minimap absolute"
            src={`/images/Track/MiniMap/${track.id}_minimap.png`}
            alt="MiniMap"
            width="96"
            height="96"
            loading="lazy"
        />
    {/if}
    {#if track.difficulty}
        <div class="track-metadata absolute">
            <div class="left">
                {#if track.reqLicense}
                    <img
                        class="license-level"
                        src={`/images/Common/_Res/Texture/License_${track.reqLicense}_Simple.png`}
                        alt={track.reqLicense}
                        width="330"
                        height="367"
                        loading="lazy"
                    />
                {/if}
                <TrackDifficulty difficulty={track.difficulty} />
            </div>
            <div class="right">
                <img
                    src="/images/Lobby/_Res/Sprites/Lobby_MatchBtn_IconSpeed.png"
                    alt="Speed mode"
                    width="24"
                    height="24"
                    loading="lazy"
                />
                {#if track.itemMode}
                    <img
                        src="/images/Lobby/_Res/Sprites/Lobby_MatchBtn_IconItem.png"
                        alt="Item mode"
                        width="24"
                        height="24"
                        loading="lazy"
                    />
                {/if}
            </div>
        </div>
    {/if}
    <!-- <img
        class="absolute"
        style="bottom: 0.5rem; right: 0.5rem; display: block; margin: -2px; box-shadow: none"
        src={`/images/Track/theme/${track.theme}.png`}
        alt={track.theme}
        width="28"
        height="28"
    /> -->
</li>

<style lang="scss">
    li {
        position: relative;
        transition: all 0.1s linear;
        padding: 0;
        overflow: hidden;
        filter: grayscale(0.3) brightness(1);

        *:not(a) {
            pointer-events: none;
        }
    }

    li:hover,
    li:focus-within {
        transform: translateY(-4px);
        filter: grayscale(0) brightness(1);
        // border-color: var(--accent);

        a .track-theme {
            opacity: 1;
        }
    }

    img.bg {
        width: 100%;
        height: auto;
        display: block;
    }

    .minimap {
        top: 0;
        right: 0;
        width: auto;
        height: 100%;
        padding: 2rem;
        filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));
        opacity: 0.9;
    }

    a {
        width: 100%;
        color: inherit;
        border: none;

        // Clickable everywhere
        &::before {
            content: "";
            inset: 0;
            position: absolute;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
        }

        span.absolute {
            z-index: 1;
            bottom: 0;
            left: 0;
            padding: 0.5em;
            font-weight: 500;
            font-size: 1.13rem;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
        }

        .track-theme {
            transition: all 0.1s linear;
            color: var(--highlight);
            opacity: 0;
            font-size: 0.9rem;
            font-style: normal;
        }
    }

    .track-metadata {
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0.5rem;

        .left {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        img.license-level {
            width: 22px;
            height: auto;
            filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.4));
        }

        .right {
            display: grid;
            gap: 0.25rem;

            img {
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                border-radius: 3px;
            }
        }
    }
</style>
