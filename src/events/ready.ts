import * as log from '../log';

export default function eventReady(channel: string, username: string): void {
	log.good(`Joined channel '${channel}'`);
}
