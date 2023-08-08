import express, { NextFunction, Request, Response } from "express";
import generateOpenApiDocumentation from "./openapi";
import http from "http";
import logger from "./lib/logging/logger";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
const app = express();

const logResponseTime = (req: Request, res: Response, next: NextFunction) => {
	const startTime = process.hrtime();

	res.on("finish", () => {
		const [start, end] = process.hrtime(startTime);
		/* eslint-disable no-magic-numbers */
		const elapsedTimeInMs = start * 1000 + end / 1e6;
		const message = `${req.method} ${res.statusCode} ${elapsedTimeInMs}ms\t${req.path}`;
		logger.log({
			level: "debug",
			message,
			consoleLoggerOptions: {
				label: "API",
			},
		});
	});

	next();
};

app.use(logResponseTime);

export default class App {
	public express!: express.Application;
	public httpServer!: http.Server;

	public async init(): Promise<void> {
		this.express = express();
		this.httpServer = http.createServer(this.express);
		this.middleware();
		this.router();
		await this.docs();
	}

	private router(): void {
		// Server static html file to check if the server is working
		this.express.use("/", express.static("public"));
		this.express.use(routes);
	}

	private async docs(): Promise<void> {
		if (process.env["NODE_ENV"] !== "test") {
			const openApi = await generateOpenApiDocumentation();
			this.express.use("/docs", swaggerUi.serve, swaggerUi.setup(openApi));
		}
	}

	private middleware(): void {
		this.express.use(express.json());
		this.express.use(express.urlencoded({ extended: true }));
	}
}
