import AuthObject from './auth';
import * as log from '../log';

import tmi from 'tmi.js';

export default class Bot {
	public readonly auth: AuthObject;
	public client: tmi.Client;
	public channels: string[];

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
	}

	async registerEvents(): Promise<void> {
		await this.client.on('join', (channel: string, username: string) => {
			log.good(`Joined channel '${channel}'`);
		});
	}

	async start(): Promise<void> {
		log.info('Registering events');
		await this.registerEvents();
		log.info('Starting bot');
		await this.client.connect();
		log.good('Started bot');
	}
}
