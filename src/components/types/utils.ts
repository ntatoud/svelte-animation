import type { Snippet } from 'svelte';

export type PropsWithChildren<T extends object = object> = T & { children: Snippet };
