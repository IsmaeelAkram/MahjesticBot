import { AuthObject } from './auth';
import tmi from 'tmi.js';

interface bot {
	auth: AuthObject;
	client: tmi.Client;
}
