<script lang="ts">
	import Bounded from '#components/atoms/Bounded.svelte';
	import LinkButton from '#components/atoms/LinkButton.svelte';
	import PlainLogo from '#components/atoms/PlainLogo.svelte';
</script>

<Bounded className="relative py-32 text-center font-medium md:py-40">
	<div
		class="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-violet-500/50 blur-[160px] filter"
	></div>
	<div
		class="glass-container rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 md:rounded-xl"
	>
		<PlainLogo />
	</div>
	<h2 class="mt-8 max-w-xl text-balance text-5xl">AI powered insights for videographers</h2>
	<LinkButton href="/" className="mt-6">Start now</LinkButton>
</Bounded>
