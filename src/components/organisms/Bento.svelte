<script lang="ts">
	/**
	 * Import assets
	 */
	import SelectAnEmailPicture from '#assets/select-an-email.jpg';
	import ProjectUpdatePicture from '#assets/project-update.jpg';

	import Bounded from '#components/atoms/Bounded.svelte';
	import GoldText from '#components/atoms/GoldText.svelte';
	import clsx from 'clsx';

	const bentoItems = [
		{
			title: 'Endless Ideation',
			body: 'Come up with new ideas faster than you can open Final Cut Pro.',
			image: SelectAnEmailPicture,
			altImage: 'Select an email'
		},
		{
			title: 'Benchmark with AI',
			body: 'Never worry about costly CGI again, now you can get all the benefits of a film studio with our generative tech.',
			image: ProjectUpdatePicture,
			altImage: 'Project update',
			isWide: true
		},
		{
			title: 'Aesthetic Excellence',
			body: 'Never worry about costly CGI again, now you can get all the benefits of a film studio with our generative tech.',
			image: SelectAnEmailPicture,
			altImage: 'Select an email again',
			isWide: true
		},
		{
			title: 'Aesthetic Excellence',
			body: 'Our features power your next big project, whether it’s a short or a feature film.',
			image: ProjectUpdatePicture,
			altImage: 'Project update again'
		}
	];
</script>

<Bounded>
	<h2 class="max-w-3xl text-balance text-center text-5xl font-medium md:text-7xl">
		The new <GoldText>Gold Standard</GoldText>.
	</h2>
	<div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
		<p class="">
			Introducing a new way of creating dynamic content that leaves everything else in the dust.
		</p>
	</div>

	<div class="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
		{#each bentoItems as item}
			<div
				class={clsx(
					'row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-black/60 p-4 ring-2 ring-gray-900',
					item.isWide ? 'md:col-span-2' : 'md:col-span-1'
				)}
			>
				<h3 class="text-2xl">{item.title}</h3>
				<div class=" text-balance text-gray-300">{item.body}</div>

				<img src={item.image} alt={item.altImage} class="max-h-36 w-auto rounded-lg" />
			</div>
		{/each}
	</div>
</Bounded>
