<script lang="ts">
	import LinkButton from './atoms/LinkButton.svelte';
</script>

<header>
	<nav
		class="flex flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row"
		aria-label="Main"
	>
		<a href="/">
			<!-- TODO: Add LOGO -->
			LOGO
		</a>
		<LinkButton href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Features</LinkButton>
	</nav>
</header>
