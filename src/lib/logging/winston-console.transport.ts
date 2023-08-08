import Transport from "winston-transport";

/**
 * https://stackoverflow.com/a/41407246
 * Log level escpace codes
 */
const levelStyleMap: { [key: string]: string } = {
	error: "\x1b[41m%s\x1b[0m",
	warn: "\x1b[33m%s\x1b[0m",
	info: "\x1b[94m%s\x1b[0m",
	verbose: "\x1b[35m%s\x1b[0m",
	debug: "\x1b[32m%s\x1b[0m",
	silly: "\x1b[36m%s\x1b[0m",
};

interface infoModel {
	level: string;
	message: string;
	stack: object | undefined;
	consoleLoggerOptions: { label: string | undefined } | undefined;
}

export default class ConsoleLogTransport extends Transport {
	override log = (info: infoModel, callback: { (): void }) => {
		let label = (info.level as string).toUpperCase();

		if (info.consoleLoggerOptions && info.consoleLoggerOptions["label"]) {
			label = info.consoleLoggerOptions.label;
		}

		const date = new Date().toLocaleTimeString();
		const finalMessage = `[${label}] ${date} | ${info.message}`;

		console.log(levelStyleMap[info.level], finalMessage);

		if (info.stack) {
			console.log("\t", info.stack);
		}

		callback();
	};
}
