// An example extension that proxies requests to the PokeAPI
import { defineEndpoint } from '@directus/extensions-sdk';

export default defineEndpoint((router) => {
	router.get('/*', async (req, res) => {
		try {
			const response = await fetch(`https://pokeapi.co/api/v2/${req.url}`);
	
			if (response.ok) {
				res.json(await response.json());
			} else {
				res.status(response.status);
				res.send(response.statusText);
			}
		} catch (error) {
			res.status(500);
			res.send((error as Error).message);
		}
	});
});
