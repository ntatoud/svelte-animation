<script lang="ts">
	import Header from '@components/Header.svelte';
	import '../app.css';
	import Footer from '@components/Footer.svelte';
	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
