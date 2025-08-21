// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	integrations: [
		icon({
			include: {
				logos: ["*"], // Include all logos icons
				"simple-icons": ["*"], // Include all simple-icons
				"skill-icons": ["*"], // Include all skill-icons
				devicon: ["*"], // Include all devicon icons
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
