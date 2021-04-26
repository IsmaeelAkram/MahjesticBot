import tmi from 'tmi.js';

import Command from '../common/command';

async function commandPing(
	client: tmi.Client,
	channel: string,
	userstate: tmi.Userstate,
	message: string,
	args: string[]
): Promise<void> {
	await client.say(channel, `${userstate['display-name']} Pong!`);
}

const ping: Command = {
	name: 'ping',
	description: 'Bot status check',
	aliases: ['!p'],
	handler: commandPing,
};

export default ping;
