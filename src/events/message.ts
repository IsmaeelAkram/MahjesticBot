import * as log from '../log';
import tmi from 'tmi.js';
import { bot } from '../index';

import Ping from '../commands/ping';

export default function eventMessage(
	channel: string,
	userstate: tmi.Userstate,
	message: string
): void {
	if (!message.startsWith('!')) {
		return;
	}
	log.good(`${userstate['display-name']}: ${message}`);

	Ping.handler(bot.client, channel, userstate, message, []).catch((err) => {
		log.danger(err);
	});
}
