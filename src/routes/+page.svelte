<script>
	import Map from './Map.svelte';
	import Create from './Create.svelte';
	export let data;
</script>

<svelte:head>
	<title>Shiba Karte</title>
	<meta name="description" content="Interaktive Shiba Karte" />
</svelte:head>

<section>
	<div class="container">
		<h1>Shiba Karte</h1>
		<Map/>
		<Create/>
	</div>
	<div class="container">
		<h2>Debug:</h2>
		{#each data.rows.rows as { id, name } (id)}
			<p>{id} - {name}</p>
		{/each}
	</div>
</section>

<style>

</style>
