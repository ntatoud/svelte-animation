<script lang="ts">
	import LinkButton from '#components/atoms/LinkButton.svelte';
	import HeroPicture from '#assets/hero-picture.jpg';
	import Bounded from '#components/atoms/Bounded.svelte';
	import TriangleGrid from '#components/molecules/TriangleGrid.svelte';
</script>

<Bounded>
	<div class="relative text-center">
		<TriangleGrid />
		<h1 class="mx-auto max-w-3xl text-balance text-5xl font-bold md:text-7xl">Your Hero title</h1>
		<p class="mx-auto mt-6 max-w-md text-balance text-gray-300">
			Small catchy description of your hero. Be creative !
		</p>
		<LinkButton href="/" className="mt-8">Download Now</LinkButton>

		<div class="mt-16 w-fit">
			<div
				class="absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-violet-700/20 mix-blend-screen blur-[120px] filter"
			></div>
			<div
				class="absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-orange-600/20 mix-blend-screen blur-[120px] filter"
			></div>
			<div class="aspect-video">
				<img
					src={HeroPicture}
					alt="Spooky pumpinks"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>
		</div>
	</div>
</Bounded>
