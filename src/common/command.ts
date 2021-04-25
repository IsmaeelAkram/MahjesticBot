import tmi from 'tmi.js';

export default interface Command {
	name: string;
	description: string;
	aliases: string[];
	handler: (
		client: tmi.Client,
		channel: string,
		userstate: tmi.Userstate,
		message: string,
		args: string[]
	) => Promise<void>;
}
