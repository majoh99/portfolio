// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: 'https://majoh99.github.io',
	base: '/prueba-astro',
	vite: {
		plugins: [tailwindcss()],
	},
});
