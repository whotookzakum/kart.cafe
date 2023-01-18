<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Changelog from "$lib/components/misc/Changelog.svelte";
    import ItemDropTable from "$lib/components/misc/ItemDropTable.svelte";
    import YouTube from "../lib/components/YouTube.svelte";
</script>

<MetaTags
    title="Welcome"
    description="A KartRider: Drift online resource. Browse karts, characters, accessories, tracks, and more!"
/>

<h1>Welcome to Kart Cafe!</h1>
<p>
    We are a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
    ratione dolore, aliquid adipisci quae accusantium harum nisi, magni dolorem
    necessitatibus quo!
</p>

<h2>Featured Video</h2>
<YouTube
    id="wLZNerE4Vs8"
    title="Drift Tutorial: How to drift"
    caption="In this weeks video, donutKR teaches us the basics of drifting techniques."
/>

<h2>What's New</h2>
<Changelog />

<h2>Item Mode drop rates (8 players)</h2>

<h3>Squad</h3>
<ItemDropTable mode="squad" />

<h3>Duo</h3>
<ItemDropTable mode="duo" />

<h3>Solo</h3>
<ItemDropTable mode="solo" />

