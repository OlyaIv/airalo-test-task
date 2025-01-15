import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettierConfig from "eslint-config-prettier";
import yml from 'eslint-plugin-yml';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}", '**/*.yaml', '**/*.yml']},
  {plugins: { yml }},
  {rules: {
    // Ensure there are no multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 1 }],
    
    // Ensure a newline at the end of the file
    'eol-last': ['error', 'always'],

    // Enforce 2 spaces for indentation
    'yml/indent': ['error', 2],

    // Require a newline at the end of the file
    'yml/eol-last': ['error', 'always'],

    // Prohibit trailing spaces
    'yml/no-trailing-blank-lines': ['error'],

    // Enforce consistency in key ordering
    'yml/sort-keys': ['off'] // Optional: set to 'error' if you want this
  }},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettierConfig,
];
