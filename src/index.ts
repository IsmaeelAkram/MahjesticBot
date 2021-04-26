require('dotenv').config();

import * as log from './log';
import Bot from './common/bot';
import AuthObject from './common/auth';
let auth: AuthObject = {
	username: process.env.username || '',
	OAuthToken: process.env.oauth_token || '',
	clientId: process.env.client_id || '',
};
console.log(auth);

export let bot = new Bot(auth, ['mahjestic']);
bot.start().catch((err) => {
	log.danger('Error starting bot: ' + err);
});
