<script lang="ts">
	import clsx from 'clsx';
	import type { Snippet } from 'svelte';

	type BoundedProps = { children: Snippet; tag?: string; className?: string };

	let { children, tag = 'section', className }: BoundedProps = $props();

	const defaultClassName = 'px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24';
</script>

<svelte:element this={tag} class={clsx(defaultClassName, className)}>
	<div class="mx-auto flex w-full max-w-6xl flex-col items-center">
		{@render children()}
	</div>
</svelte:element>
