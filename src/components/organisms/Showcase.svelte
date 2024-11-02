<script lang="ts">
	/**
	 * Import assets
	 */
	import ShowcasePicture from '#assets/showcase-picture.png';

	import Bounded from '#components/atoms/Bounded.svelte';
	import LinkButton from '#components/atoms/LinkButton.svelte';
	import SettingsIcon from '#components/icons/Settings.svelte';
	import clsx from 'clsx';
</script>

<Bounded>
	<!-- Purple glow -->
	<div
		class="absolute -z-10 aspect-video w-full max-w-2xl rounded-full bg-violet-500/40 mix-blend-screen blur-[120px] filter"
	></div>
	<h2 class="max-w-3xl text-balance text-center text-5xl font-medium md:text-7xl">
		Your videos. <br /> Your workflow.
	</h2>
	<div
		class="relative mt-16 grid items-center gap-8 rounded-xl border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 backdrop-blur-sm xl:grid-cols-3 xl:gap-0 xl:py-12"
	>
		<div class="grid-background"></div>
		<div>
			<div class="w-fit rounded-lg bg-violet-800 p-4 text-3xl">
				<SettingsIcon />
			</div>
			<h3 class="mt-6 text-2xl font-normal">Create the next viral video.</h3>
			<div class="prose prose-invert mt-4 max-w-xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
				<br /><br />
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
			</div>
			<LinkButton href="/" className="mt-6">Get Started</LinkButton>
		</div>
		<img
			src={ShowcasePicture}
			alt={'Code sample'}
			class={clsx('opacity-90 shadow-2xl lg:col-span-2 lg:pt-0 xl:-order-1 xl:-translate-x-[10%]')}
		/>
	</div>
</Bounded>

<style>
	.grid-background {
		background-image: url('/assets/grid-pattern.png');
		position: absolute;
		inset: 0;
		background-repeat: repeat;
		z-index: -1;
		background-position: center;
		opacity: 0.15;
		mask-image: radial-gradient(circle at 60% 50%, black 10%, transparent 40%);
	}
</style>
