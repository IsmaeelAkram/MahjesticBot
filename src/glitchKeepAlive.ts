import http from 'http';
import express from 'express';

import * as log from './log';

export default function glitchKeepAlive(): void {
	const PORT = process.env.PORT || 80;
	const app = express();

	app.get('/', (req: express.Request, res: express.Response) => {
		log.info(`GET / ${req.ip} 200`);
		res.sendStatus(200);
	});

	app.listen(PORT, () => {
		log.good('Express server started');
	});

	setInterval(() => {
		let url = `http://${process.env.PROJECT_DOMAIN}.glitch.me/`;
		http.get(url);
		log.info('Sending request to self at ' + url);
	}, 280000);
}
