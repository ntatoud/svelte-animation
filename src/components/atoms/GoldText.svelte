<script lang="ts">
	import type { PropsWithChildren } from '#components/types/utils';

	let { children }: PropsWithChildren = $props();
</script>

<em class="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">
	{@render children()}
</em>
