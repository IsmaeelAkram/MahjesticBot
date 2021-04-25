export default interface Command {
	name: string;
	description: string;
	aliases: string[];
	handler: void;
}
