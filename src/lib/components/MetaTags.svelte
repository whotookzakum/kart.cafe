<script>
    // Static meta tags in app.html
	export let title,
		description,
		image,
		color = undefined;

	color ??= "hsl(219, 70%, 45%)"
</script>

<svelte:head>
	<title>{title} — Kart Cafe</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta name="theme-color" content={color} />
    <meta name="twitter:card" content="summary_large_image" key="misc-card" />
</svelte:head>