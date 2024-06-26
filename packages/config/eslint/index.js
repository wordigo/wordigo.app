/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next",
    "turbo",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-unsafe-argument": "off",
    "@next/next/no-head-element": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "react-hooks/rules-of-hooks": "off",
    "typescript-eslint/no-explicit-any": "off",
    "@next/next/no-img-element": "off",
    "jsx-a11y/alt-text": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/exhaustive-deps": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "import/no-anonymous-default-export": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/no-misused-promises": [
      0,
      {
        checksVoidReturn: {
          // Allow promises to be used as attributes such as `onSubmit`
          attributes: false,
        },
      },
    ],
  },
  ignorePatterns: ["**/*.config.js", "**/*.config.cjs", "packages/config/**"],
  reportUnusedDisableDirectives: true,
}

module.exports = config
