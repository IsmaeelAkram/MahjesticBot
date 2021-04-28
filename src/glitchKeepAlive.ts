import http from 'http';
import express from 'express';

import * as log from './log';
import axios, { AxiosError, AxiosResponse } from 'axios';

export default function glitchKeepAlive(): void {
	const PORT = process.env.PORT || 80;
	const app = express();

	app.get('/', (req: express.Request, res: express.Response) => {
		log.info(`GET / ${req.socket.remoteAddress} 200`);
		res.sendStatus(200);
	});

	app.listen(PORT, () => {
		log.good('Express server started');
	});

	setInterval(() => {
		let url = `http://${process.env.PROJECT_DOMAIN}.glitch.me/`;
		axios
			.get(url)
			.then((res: AxiosResponse) => {
				log.info(`Sent request to '${url}'`);
			})
			.catch((err: AxiosError) => {
				log.danger(`Error sending keepalive request to '${url}': ${err} `);
			});
	}, 280000);
}
