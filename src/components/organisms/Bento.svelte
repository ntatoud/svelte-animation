<script lang="ts">
	import GhostsPicture from '#assets/bento-ghosts.jpg';
	import SkeletonsPicture from '#assets/bento-skeletons.jpg';
	import ZombiesPicture from '#assets/bento-zombies.png';
	import Bounded from '#components/atoms/Bounded.svelte';
	import GoldText from '#components/atoms/GoldText.svelte';

	const bentoItems = [
		{
			title: 'Skeletons',
			body: 'Spooky scary skeletons.',
			image: SkeletonsPicture,
			altImage: 'Spooky scary skeleton'
		},
		{
			title: 'Zombies',
			body: 'Careful, will eat your brain (if you have any)',
			image: ZombiesPicture,
			altImage: 'Zombies from The Walking Dead'
		},
		{
			title: 'Ghosts',
			body: 'Not all of them are as nice as Casper...',
			image: GhostsPicture,
			altImage: 'Spooky the ghost'
		}
	];
</script>

<Bounded>
	<h2 class="text-balance text-center text-5xl font-medium md:text-7xl">
		What a <GoldText>cool effect</GoldText> this is
	</h2>
	<div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
		<p class="">Lorem ipsum</p>
	</div>

	<div class="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
		{#each bentoItems as item}
			<div class="row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-black/60 p-4">
				<p>{item.title}</p>
				<p>{item.body}</p>

				<img
					src={item.image}
					alt={item.altImage}
					class="aspect-square h-full w-full rounded-lg object-cover"
				/>
			</div>
		{/each}
	</div>
</Bounded>
