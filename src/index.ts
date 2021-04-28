require('dotenv').config();

import * as log from './log';
import Bot from './common/bot';
import AuthObject from './common/auth';
import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 80;
const auth: AuthObject = {
	username: process.env.username || '',
	OAuthToken: process.env.oauth_token || '',
	clientId: process.env.client_id || '',
};

export let bot = new Bot(auth, ['mahjestic']);

bot.start().catch((err) => {
	log.danger('Error starting bot: ' + err);
});

app.get('/', (req: Request, res: Response) => {
	res.sendStatus(200);
});

app.listen(PORT, () => {
	log.good('Express Server started');
});
