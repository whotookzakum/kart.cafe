<div class="modal grid absolute">
    <div class="modal-contents box surface">
        <a href="/characters" aria-label="Close details">X</a>
        <slot />
    </div>
</div>

<style lang="scss">
    .modal {
        // position: fixed;
        justify-items: center;
        inset: 0;
        z-index: 2;
        padding-top: 89px;
    }

    .modal-contents {
        position: relative;
        max-inline-size: 800px;
        width: 100%;
        margin: 1rem;
    }

    a {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    a::before {
        content: "";
        inset: 0;
        position: fixed;
        z-index: -1;
        background: hsla(219, 70%, 10%, 0.5);
        backdrop-filter: blur(8px);
        cursor: auto;
    }
</style>
