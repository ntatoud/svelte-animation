<script lang="ts">
	/**
	 * Import assets
	 */
	import Bounded from '#components/atoms/Bounded.svelte';
	import HeroPicture from '#assets/hero-picture.jpg';

	import TriangleGrid from '#components/molecules/TriangleGrid.svelte';
	import LinkButton from '#components/atoms/LinkButton.svelte';
</script>

<Bounded>
	<div class="relative text-center">
		<TriangleGrid />
		<h1 class="mx-auto max-w-3xl text-balance text-5xl font-medium md:text-7xl">
			Videos they'll watch again. And again.
		</h1>
		<p class="mx-auto mt-6 max-w-md text-balance text-gray-300">
			Use our cutting-edge AI models to take your videos from good to great.
		</p>
		<LinkButton href="/" className="mt-8">Download Now</LinkButton>

		<div class="mt-16 w-fit">
			<div
				class="absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-violet-700/20 mix-blend-screen blur-[120px] filter"
			></div>
			<div
				class="absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-orange-600/20 mix-blend-screen blur-[120px] filter"
			></div>
			<div class="glass-container">
				<img
					src={HeroPicture}
					alt="Spooky pumpinks"
					class="glass-container h-full w-full rounded-lg object-cover"
				/>
			</div>
		</div>
	</div>
</Bounded>
