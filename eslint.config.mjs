import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { files: ["src/**/*.ts", "tests/**/*.ts"] },
  {
    ignores: ["dist", "babel.config.js", "jest.config.js"],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
