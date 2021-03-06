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
	await bot.client.say(channel, `${userstate['display-name']} Pong!`);
}

const command: Command = {
	name: 'ping',
	description: 'Bot status check',
	aliases: ['!p'],
	handler: handler,
};

export default command;
