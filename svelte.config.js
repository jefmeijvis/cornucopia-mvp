import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = 
{
	preprocess: vitePreprocess(),
	kit: 
	{
		adapter: adapter(),
		alias: {
			$data: "data",
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				console.log(message);
				console.log(referrer);
				console.log(path);
				// otherwise fail the build
				throw new Error(message);
			},
			entries: [
				'/cards/VE2',
				'/cards/VE3',
				'/cards/VE4',
				'/cards/VE5',
				'/cards/VE6',
				'/cards/VE7',
				'/cards/VE8',
				'/cards/VE9',
				'/cards/VEX',
				'/cards/VEJ',
				'/cards/VEQ',
				'/cards/VEK',
				'/cards/VEA',
				'/cards/AT2',
				'/cards/AT3',
				'/cards/AT4',
				'/cards/AT5',
				'/cards/AT6',
				'/cards/AT7',
				'/cards/AT8',
				'/cards/AT9',
				'/cards/ATX',
				'/cards/ATJ',
				'/cards/ATQ',
				'/cards/ATK',
				'/cards/ATA',
				'/cards/AZ2',
				'/cards/AZ3',
				'/cards/AZ4',
				'/cards/AZ5',
				'/cards/AZ6',
				'/cards/AZ7',
				'/cards/AZ8',
				'/cards/AZ9',
				'/cards/AZX',
				'/cards/AZJ',
				'/cards/AZQ',
				'/cards/AZK',
				'/cards/AZA',
				'/cards/C2',
				'/cards/C3',
				'/cards/C4',
				'/cards/C5',
				'/cards/C6',
				'/cards/C7',
				'/cards/C8',
				'/cards/C9',
				'/cards/CX',
				'/cards/CJ',
				'/cards/CQ',
				'/cards/CK',
				'/cards/CA',
				'/cards/CR2',
				'/cards/CR3',
				'/cards/CR4',
				'/cards/CR5',
				'/cards/CR6',
				'/cards/CR7',
				'/cards/CR8',
				'/cards/CR9',
				'/cards/CRX',
				'/cards/CRJ',
				'/cards/CRQ',
				'/cards/CRK',
				'/cards/CRA',
				'/cards/SM2',
				'/cards/SM3',
				'/cards/SM4',
				'/cards/SM5',
				'/cards/SM6',
				'/cards/SM7',
				'/cards/SM8',
				'/cards/SM9',
				'/cards/SMX',
				'/cards/SMJ',
				'/cards/SMQ',
				'/cards/SMK',
				'/cards/SMA'
			]
		}
	}
};

export default config;
