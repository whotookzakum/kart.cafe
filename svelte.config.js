import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'
import containers from "remark-containers";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [
				[containers]
			]
		})
	],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter(),
		prerender: {
			handleMissingId: 'ignore'
		}
	}
};

export default config;
