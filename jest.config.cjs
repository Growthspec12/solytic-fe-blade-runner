module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: [
    "js",
    "ts",
    "json",
    "vue"
  ],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.ts?$": "ts-jest",
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
  }
  // testEnvironmentOptions: {
  //   customExportConditions: ["node", "node-addons"]
  // },
  // moduleNameMapper: {
  //   "^@/(.*)$": "<rootDir>/src/$1"
  // }
};
