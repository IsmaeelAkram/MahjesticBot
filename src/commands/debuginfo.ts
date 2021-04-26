import tmi from 'tmi.js';

import Command from '../common/command';
import Bot from '../common/bot';

async function handler(
	bot: Bot,
	channel: string,
	userstate: tmi.Userstate,
	message: string,
	args: string[]
): Promise<void> {
	if (!bot.admins.includes(userstate.username)) return;

	await bot.client.whisper(userstate.username, 'Hey cutie pie');
}

const command: Command = {
	name: 'debuginfo',
	description: 'Get info about the currently running instance',
	aliases: [],
	handler: handler,
};

export default command;
