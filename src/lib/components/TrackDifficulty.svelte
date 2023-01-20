<script>
    export let difficulty = 0;
</script>

<div class="difficulty">
    {#each { length: 5 } as _, i}
        <i class="dot" class:fill={i < difficulty} />
    {/each}
</div>

<style lang="scss">
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
    }

    .fill {
        background: radial-gradient(circle at top left, #ffd42a, var(--accent));
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7),
            inset 0 1px 3px rgba(255, 187, 0, 0.5);
    }
</style>
