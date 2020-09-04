module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,mjs}"],
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "jsx"],
    setupFiles: ["<rootDir>/enzyme.config.js"],
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testURL: "http://localhost",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  verbose: false,
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.svg$": "<rootDir>/fileTransformer.js",
  },
};
