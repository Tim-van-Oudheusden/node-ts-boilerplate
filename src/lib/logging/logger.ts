import { createLogger, format, transports } from "winston";
import ConsoleLoggerTransport from "./winston-console.transport";

const logTransports = [
	new transports.File({
		level: "error",
		filename: "./logs/error.log",
		format: format.json({
			replacer: (key, value) => {
				if (key === "error") {
					return {
						message: (value as Error).message,
						stack: (value as Error).stack,
					};
				}
				return value;
			},
		}),
	}),
	new ConsoleLoggerTransport(),
];

const logger = createLogger({
	format: format.combine(format.timestamp()),
	transports: logTransports,
	defaultMeta: { service: "api" },
	level: process.env["LOG_LEVEL"] ? process.env["LOG_LEVEL"] : "error",
});

export default logger;