require('dotenv').config();
import http from 'http';
import express from 'express';

import * as log from './log';
import Bot from './common/bot';
import AuthObject from './common/auth';

const PORT = process.env.PORT || 80;
let auth: AuthObject = {
	username: process.env.username || '',
	OAuthToken: process.env.oauth_token || '',
	clientId: process.env.client_id || '',
};
export let bot = new Bot(auth, ['mahjestic']);

bot.start().catch((err) => {
	log.danger('Error starting bot: ' + err);
});

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
	res.sendStatus(200);
});

app.listen(PORT, () => {
	log.good('Express server started');
});

setInterval(() => {
	http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
	log.info('Sending request to self');
}, 280000);
