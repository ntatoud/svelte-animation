<script lang="ts">
	import LinkButton from './atoms/LinkButton.svelte';
	import Logo from './atoms/Logo.svelte';
</script>

<header>
	<nav
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-8 py-7 md:flex-row"
		aria-label="Main"
	>
		<a href="/">
			<Logo />
		</a>
		<LinkButton href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Features</LinkButton>
	</nav>
</header>
