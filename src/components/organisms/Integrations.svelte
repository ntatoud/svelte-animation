<script lang="ts">
	/**
	 * Import assets
	 */
	import BackgroundImage from '#assets/background.jpg';
	import DockerIcon from '#icons/Docker.svelte';
	import GithubIcon from '#icons/Github.svelte';
	import NpmIcon from '#icons/Npm.svelte';
	import SvelteIcon from '#icons/Svelte.svelte';
	import TailwindIcon from '#icons/Tailwind.svelte';
	import TypescriptIcon from '#icons/Typescript.svelte';

	import { onMount } from 'svelte';
	import clsx from 'clsx';
	import gsap from 'gsap';
	import LogoBackground from '#components/atoms/LogoBackground.svelte';
	import StylizedLogoMark from '#components/atoms/StylizedLogoMark.svelte';
	import Bounded from '#components/atoms/Bounded.svelte';

	const integrationsIcons = [
		DockerIcon,
		GithubIcon,
		NpmIcon,
		SvelteIcon,
		TailwindIcon,
		TypescriptIcon
	];

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) return;

		const tl = gsap.timeline({
			repeat: -1,
			defaults: { ease: 'power2.inOut' }
		});

		tl.to('.pulsing-logo', {
			keyframes: [
				{
					filter: 'brightness(2)',
					opacity: 1,
					duration: 0.4,
					ease: 'power2.in'
				},
				{
					filter: 'brightness(1)',
					opacity: 0.7,
					duration: 0.9
				}
			]
		});

		tl.to(
			'.signal-line',
			{
				keyframes: [
					{ backgroundPosition: '0% 0%' },
					{
						backgroundPosition: '100% 100%',
						duration: 1,
						stagger: {
							from: 'center',
							each: 0.3
						}
					}
				]
			},
			'-=1.4'
		);

		tl.to(
			'.pulsing-icon',
			{
				keyframes: [
					{
						opacity: 1,
						duration: 1,
						stagger: {
							from: 'center',
							each: 0.3
						}
					},
					{
						opacity: 0.4,
						duration: 1,
						stagger: {
							from: 'center',
							each: 0.3
						}
					}
				]
			},
			'-=2'
		);
	});
</script>

<Bounded className="relative overflow-hidden">
	<img
		src={BackgroundImage}
		alt="Integrations background"
		class="absolute inset-0 -z-10 h-full w-full object-cover"
	/>
	<LogoBackground />
	<div class="relative">
		<h2
			class="mx-auto max-w-3xl text-balance bg-gradient-to-b from-violet-50 to-violet-300 bg-clip-text py-2 text-center text-5xl font-medium text-transparent md:text-7xl"
		>
			Integrations galore
		</h2>
		<div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
			The integrations your team needs to be productive at scale with no impact on your burn rate.
		</div>

		<div class="mt-20 flex flex-col items-center md:flex-row">
			{#each integrationsIcons as icon, index}
				{#if index === Math.floor(integrationsIcons.length / 2)}
					<StylizedLogoMark />
					<div class="signal-line rotate-180"></div>
				{/if}
				<div
					class="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-violet-50/30 bg-violet-50/25 p-3 text-3xl text-violet-100 opacity-40 md:text-3xl lg:text-5xl"
				>
					<svelte:component this={icon} width={80} height={80} />
				</div>

				{#if index !== integrationsIcons.length - 1}
					<div
						class={clsx(
							'signal-line',
							index >= Math.floor(integrationsIcons.length / 2) ? 'rotate-180' : 'rotate-0'
						)}
					></div>
				{/if}
			{/each}
		</div>
	</div>
</Bounded>
