import tmi from 'tmi.js';

import eventReady from '../events/ready';
import eventMessage from '../events/message';
import eventDisconnected from '../events/disconnected';

import AuthObject from './auth';
import * as log from '../log';

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
		await this.client.on('join', eventReady);
		await this.client.on('message', eventMessage);
		await this.client.on('disconnected', eventDisconnected);
	}

	async start(): Promise<void> {
		log.info('Registering events');
		await this.registerEvents();
		log.info('Starting bot');
		await this.client.connect();
		log.good('Started bot');
	}
}
