import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ["'Poppins'", 'sans-serif']
		},
		extend: {}
	},

	plugins: [typography]
} satisfies Config;
