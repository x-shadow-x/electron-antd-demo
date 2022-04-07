module.exports = {
  env: {
    es6: true,
    node: true,
    // avoid errors like it/describe in test
    jest: true,
    // avoid errors like window/document
    browser: true
  },
  plugins: ["react", "@typescript-eslint", "import", "simple-import-sort", "react-hooks"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      alias: { map: [["@", "./src"],["@root", "./src"]], extensions: [".ts", ".js", ".tsx", ".jsx", ".json"] }
    }
  },
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/prefer-includes": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/no-explicit-any": "off",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "@typescript-eslint/camelcase": "off",
    "prefer-const": ["error", { destructuring: "all" }],
    "react/display-name": "off",
    'simple-import-sort/imports': 'error',
    "sort-imports": "off",
    "import/order": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
}
