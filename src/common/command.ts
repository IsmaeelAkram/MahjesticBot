import tmi from 'tmi.js';
import Bot from './bot';

export default interface Command {
	name: string;
	description: string;
	aliases: string[];
	handler: (
		bot: Bot,
		channel: string,
		userstate: tmi.Userstate,
		message: string,
		args: string[]
	) => Promise<void>;
}
