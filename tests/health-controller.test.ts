import request from "supertest";
import server from "../src/server";
import statusCodes from "../src/lib/enums/status-codes";

const { OK } = statusCodes;

describe("GET /health", () => {
	it("should return 200 OK", () => request(server.express).get("/health").expect(OK));
});

afterAll(done => {
	server.httpServer.close();
	done();
});
