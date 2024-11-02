<script lang="ts">
	import Logo from './atoms/Logo.svelte';

	const footerItem = [
		{ label: 'Github', href: 'https://github.com/ntatoud' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/noetatoud' }
	];
</script>

<footer>
	<nav
		class="flex flex-col items-center justify-between gap-6 border-t border-gray-600 px-8 py-7 md:flex-row"
		aria-label="Footer"
	>
		<a href="/">
			<Logo />
		</a>
		<ul class="flex gap-6">
			{#each footerItem as item (item.label)}
				<li>
					<a href={item.href} class="inline-flex min-h-11 items-center">
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</footer>
