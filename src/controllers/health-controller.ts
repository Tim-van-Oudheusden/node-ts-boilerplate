import { Request, Response } from "express";
import StatusCodes from "../lib/enums/status-codes";
import logger from "../lib/logging/logger";

const { OK } = StatusCodes;

/**
 * This function is used to get the health of the server.
 * It returns a 200 status code if the server is healthy.
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
const get = (req: Request, res: Response): void => {
	logger.silly(req.url);
	res.status(OK).send("healthy");
};

export { get };
