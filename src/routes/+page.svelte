<script>
    import MetaTags from "../lib/components/MetaTags.svelte";
import ItemDropTable from "../lib/components/misc/ItemDropTable.svelte";
</script>

<MetaTags
    title="Welcome"
    description="A KartRider: Drift online resource. Browse karts, characters, accessories, tracks, and more!"
/>

<h1>This is a page.</h1>

<h2 style="margin: 0">What's New</h2>
<div class="surface box">
    <h3 style="margin: 0">Jan 13, 2023</h3>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatum assumenda consectetur! Possimus quis iste labore pariatur eligendi aliquid dolorem itaque, sunt expedita nemo nam modi facilis veritatis quo quisquam!</div>
    <a href="/" style="margin-top: 0.5rem; display: block">View past updates</a>
</div>

<ItemDropTable />