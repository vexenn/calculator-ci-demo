import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";

export default [
  // 1. Global Ignores
  {
    ignores: ["node_modules/", ".venv/", "dist/", "build/", "package-lock.json"],
  },

  // 2. JavaScript Core Setup
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    rules: {
      ...js.configs.recommended.rules,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // 3. React Setup
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "18.0.0", 
      },
    },
  },

  // 4. JSON Setup
  {
    files: ["**/*.json"],
    language: "json/json",
    plugins: { json },
    rules: {
      ...json.configs.recommended.rules,
    },
  },
];