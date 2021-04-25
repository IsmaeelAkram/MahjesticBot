import * as log from './log';
import Bot from './common/bot';
import AuthObject from './common/auth';

import config from '../config.json';

let auth: AuthObject = {
	username: config.username,
	OAuthToken: config.OAuthToken,
	clientId: config.clientId,
};
let bot = new Bot(auth, ['mahjestic']);
bot.start();
