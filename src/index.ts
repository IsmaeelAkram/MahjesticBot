require('dotenv').config();

import * as log from './log';
import Bot from './common/bot';
import AuthObject from './common/auth';
let auth: AuthObject = {
	username: process.env.username || '',
	OAuthToken: process.env.OAuthToken || '',
	clientId: process.env.clientId || '',
};

export let bot = new Bot(auth, ['mahjestic']);
bot.start().catch((err) => {
	log.danger('Error starting bot: ' + err);
});

app.get('/', (req: express.Request, res: express.Response): void => {
	res.send('Hey');
});
