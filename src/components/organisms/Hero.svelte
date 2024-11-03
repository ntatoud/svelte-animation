<script lang="ts">
	/**
	 * Import assets
	 */
	import Bounded from '#components/atoms/Bounded.svelte';
	import HeroPicture from '#assets/hero-picture.jpg';

	import { onMount } from 'svelte';
	import TriangleGrid from '#components/molecules/TriangleGrid.svelte';
	import LinkButton from '#components/atoms/LinkButton.svelte';
	import gsap from 'gsap';

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) {
			gsap.set('.hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow', {
				opacity: 1
			});
			return;
		}

		const tl = gsap.timeline({
			defaults: {
				ease: 'power2.inOut'
			}
		});

		tl.fromTo('.hero__heading', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.4 });
		tl.fromTo('.hero__body', { y: 20 }, { y: 0, opacity: 1, duration: 1.2 }, '-=.6');
		tl.fromTo('.hero__button', { scale: 1.5 }, { scale: 1, opacity: 1, duration: 1.3 }, '-=.8');
		tl.fromTo('.hero__image', { y: 100 }, { y: 0, opacity: 1, duration: 1.3 }, '+=.3');
		tl.fromTo('.hero__glow', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.8 }, '-=1');

		gsap.to('.hero__glow-purple', {
			ease: 'power2.inOut',
			repeat: -1,
			repeatDelay: 0,
			keyframes: [
				{ top: '0%', left: '33%', duration: 0 },
				{ top: '33%', left: '33%', duration: 2 },
				{ top: '33%', left: '0%', duration: 3 },
				{ top: '0%', left: '0%', duration: 2 },
				{ top: '0%', left: '33%', duration: 3 }
			]
		});

		gsap.to('.hero__glow-orange', {
			ease: 'power2.inOut',
			repeat: -1,
			repeatDelay: 0,
			keyframes: [
				{ top: '33%', left: '0%', duration: 0 },
				{ top: '0%', left: '0%', duration: 2 },
				{ top: '0%', left: '33%', duration: 3 },
				{ top: '33%', left: '33%', duration: 2 },
				{ top: '33%', left: '0%', duration: 3 }
			]
		});
	});
</script>

<Bounded>
	<div class="relative text-center">
		<TriangleGrid />
		<h1
			class="hero__heading mx-auto max-w-3xl text-balance text-5xl font-medium opacity-0 md:text-7xl"
		>
			Videos they'll watch again. And again.
		</h1>
		<p class="hero__body mx-auto mt-6 max-w-md text-balance text-gray-300 opacity-0">
			Use our cutting-edge AI models to take your videos from good to great.
		</p>
		<LinkButton href="/" className="hero__button opacity-0 mt-8">Download Now</LinkButton>

		<div class="relative mt-16 w-fit">
			<div
				class="hero__glow hero__glow-purple absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-violet-700/50 opacity-0 mix-blend-screen blur-[120px] filter"
			></div>
			<div
				class="hero__glow hero__glow-orange absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-orange-600/50 opacity-0 mix-blend-screen blur-[120px] filter"
			></div>
			<div class="hero__image glass-container opacity-0">
				<img
					src={HeroPicture}
					alt="Spooky pumpinks"
					class="h-full w-full rounded-lg object-cover"
				/>
			</div>
		</div>
	</div>
</Bounded>
