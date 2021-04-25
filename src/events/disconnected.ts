import * as log from '../log';

export default function eventDisconnected(reason: string): void {
	log.good(`Disconnected: '${reason}'`);
}
