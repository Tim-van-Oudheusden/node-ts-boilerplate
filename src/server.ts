import { AddressInfo } from "net";
import App from "./app";
import logger from "./lib/logging/logger";

/**
 * Event listener for HTTPS server "error" event.
 * @param {NodeJS.ErrnoException} error
 * @returns {void}
 */
const serverError = (error: NodeJS.ErrnoException): void => {
	if (error.syscall !== "listen") {
		throw error;
	}
};

/**
 * Event listener for HTTPS server "listening" event.
 * @returns {void}
 */
const serverListening = (): void => {
	const addressInfo: AddressInfo = <AddressInfo>server.httpServer.address();
	logger.info(`Listening on ${addressInfo.address}:${process.env["PORT"]}`);
};

const createServer = (): App => {
	const app: App = new App();
	app
		.init()
		.then(() => {
			app.express.set("port", process.env["PORT"]);
			app.httpServer.on("error", serverError);
			app.httpServer.on("listening", serverListening);
			app.httpServer.listen(process.env["PORT"]);
		})
		.catch((error: Error) => {
			logger.error(error.name);
			logger.error(error.message);
			logger.error(error.stack);
		});

	return app;
};

const server = createServer();

export default server;
