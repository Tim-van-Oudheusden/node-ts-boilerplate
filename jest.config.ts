module.exports = {
	preset: "ts-jest",
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{ts,tsx}"],
	coverageDirectory: "coverage",
	coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
	coverageReporters: ["json", "text", "lcov", "clover", "html"],
	testEnvironment: "node",
	setupFiles: ["./jest.setup.ts"],
};
