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

	let args = message.trim().split(' ');
	let cmdName = args[0].replace('!', '');

	let command = bot.getCommand(cmdName);
	if (command != null) {
		command.handler(bot.client, channel, userstate, message, args).catch((err) => {
			log.danger(`Error running command '${command.name}': ${err}`);
		});
	} else {
		log.danger(`Command '${cmdName}' not found`);
	}
}
