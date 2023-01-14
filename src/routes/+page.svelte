<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Changelog from "$lib/components/misc/Changelog.svelte";
    import ItemDropTable from "$lib/components/misc/ItemDropTable.svelte";
    import ModelViewer from "$lib/components/ModelViewer.svelte";
</script>

<MetaTags
    title="Welcome"
    description="A KartRider: Drift online resource. Browse karts, characters, accessories, tracks, and more!"
/>

<h1>Welcome to Kart Cafe!</h1>
<p>We are a Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore ratione dolore, aliquid adipisci quae accusantium harum nisi, magni dolorem necessitatibus quo!</p>

<ModelViewer />

<h2>What's New</h2>
<Changelog />

<h2>Item Mode drop rates</h2>
<ItemDropTable />