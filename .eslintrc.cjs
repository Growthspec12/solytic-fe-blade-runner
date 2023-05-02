module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "plugin:vue/strongly-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "standard-with-typescript"
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    semi: [1, "always"],
    "vue/no-multiple-template-root": "off"
  }
};
