import path from "path";
import swaggerAutogen from "swagger-autogen";

const outputFile = "../openapi.json";
const doc = {
	info: {
		title: "Boilerplate microservice backend NodeJS",
		description:
			"A boilerplate for developing a microservice backend in NodeJS, and deploying it to AWS ECS",
	},
	host: "localhost:8080",
	schemes: ["http"],
};

const getEndpointsFiles = () => {
	switch (process.env["NODE_ENV"]) {
	case "development":
		return [path.join(__dirname, "./routes.ts")];
	case "test":
		return [path.join(__dirname, "./routes.ts")];
	case "production":
		return [path.join(__dirname, "./routes.js")];
	default:
		return [path.join(__dirname, "./routes.js")];
	}
};

const generateOpenApiDocumentation = async () => {
	const endpointsFiles = getEndpointsFiles();
	let openApi: object = {};

	await swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc).then(result => {
		if (result) {
			openApi = result.data;
		}
	});

	return openApi;
};

export default generateOpenApiDocumentation;
