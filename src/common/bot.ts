import tmi from 'tmi.js';

import Command from './command';
import eventReady from '../events/ready';
import eventMessage from '../events/message';
import eventDisconnected from '../events/disconnected';

import ping from '../commands/ping';
import debuginfo from '../commands/debuginfo';

import AuthObject from './auth';
import * as log from '../log';

export default class Bot {
	public readonly auth: AuthObject;
	public client: tmi.Client;
	public admins: string[];
	public channels: string[];
	public commandsList: Command[];

	constructor(auth: AuthObject, channels: string[]) {
		this.auth = auth;
		this.channels = channels;
		this.client = new tmi.Client({
			connection: { reconnect: true },
			identity: {
				username: auth.username,
				password: auth.OAuthToken,
			},
			channels,
		});
		this.admins = ['mahjestic'];
		this.commandsList = [];
	}

	registerCommand(command: Command): void {
		log.info(`Command '${command.name}' registered`);
		this.commandsList.push(command);
	}

	registerCommands(): void {
		this.registerCommand(ping);
		this.registerCommand(debuginfo);
	}

	getCommand(cmdName: string): Command {
		let foundCommand = null;
		this.commandsList.forEach((command) => {
			if (cmdName == command.name) {
				foundCommand = command;
				return command;
			} else {
				command.aliases.forEach((alias) => {
					if (cmdName == alias) {
						foundCommand = command;
						return command;
					}
				});
			}
		});
		if (foundCommand != null) {
			return foundCommand;
		} else {
			return null;
		}
	}

	async registerEvents(): Promise<void> {
		await this.client.on('join', eventReady);
		await this.client.on('message', eventMessage);
		await this.client.on('disconnected', eventDisconnected);
	}

	async start(): Promise<void> {
		log.info('Registering events');
		await this.registerEvents();
		log.info('Registering commands');
		this.registerCommands();
		log.info('Starting bot');
		await this.client.connect();
		log.good('Started bot');
	}
}
