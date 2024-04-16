module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
    "prettier/react",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "babel-eslint",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "jsx-quotes": ["error", "prefer-single"],
  },
}
