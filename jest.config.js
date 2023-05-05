module.exports = {
  transform: {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};