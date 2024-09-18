import js from "@eslint/js";
import pluginReact from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
];

// export default defineConfig({
//   env: {
//     browser: true,
//     es2021: true
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     'prettier',
//     "plugin:@typescript-eslint/recommended"
//   ],
//   // "parser": "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true
//     },
//     ecmaVersion: 12,
//     sourceType: "module"
//   },
//   plugins: ["react"],
//   rules: {
//     semi: 'off',
//   }
// });
