import * as log from '../log';
import tmi from 'tmi.js';

export default function eventMessage(
	channel: string,
	userstate: tmi.Userstate,
	message: string
): void {
	if (!message.startsWith('!')) {
		return;
	}
	log.good(`${userstate['display-name']}: ${message}`);
}
