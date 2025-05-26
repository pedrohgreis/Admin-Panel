import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"; // Importa diretamente a config recomendada
import eslintConfigPrettier from "eslint-config-prettier"; // Desativa regras conflitantes
import { defineConfig } from "eslint/config"; // Ou de "@eslint/config-helpers" se der erro com "eslint/config"

export default defineConfig([
  // 1. Objeto de configuração principal para os arquivos do seu projeto
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // Variáveis globais do navegador (window, document, etc.)
        // ...globals.node, // Descomente se seu projeto também roda em ambiente Node.js
      },
      // Nota: O parser e parserOptions específicas para TypeScript/JSX
      // serão majoritariamente configurados por tseslint e pluginReact abaixo.
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      // Suas regras personalizadas:
      semi: ["error", "always"], // Ponto e vírgula obrigatório
      quotes: ["error", "double"], // Aspas duplas obrigatórias
      indent: ["error", 2], // Indentação de 2 espaços
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Erro para variáveis não usadas (exceto _inicio)
      "react/react-in-jsx-scope": "off", // Não necessário com nova transformação JSX
      "react/jsx-uses-react": "off", // Não necessário com nova transformação JSX

      // Configuração da regra Prettier:
      // Mostra erros de formatação do Prettier como erros do ESLint.
      // As opções (printWidth) podem vir do seu arquivo .prettierrc.js
      // ou serem especificadas aqui para sobrescrever/garantir.
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          endOfLine: "auto", // Recomendado para evitar problemas de CRLF/LF
        },
      ],
    },
    settings: {
      // Configurações específicas para plugins, como eslint-plugin-react
      react: {
        version: "detect", // Detecta automaticamente a versão do React
      },
    },
  },

  // 2. Aplica as configurações recomendadas de linters base
  js.configs.recommended, // Regras recomendadas do ESLint para JavaScript
  ...tseslint.configs.recommended, // Regras recomendadas para TypeScript (é um array, por isso o spread '...')
  pluginReact.configs.flat.recommended, // Regras recomendadas para React (formato flat)

  // 3. Integração com Prettier: Ativa eslint-plugin-prettier
  // Isso substitui o antigo `extends: ["plugin:prettier/recommended"]`
  eslintPluginPrettierRecommended,

  // 4. Desativa regras ESLint que conflitam com Prettier.
  // Isso substitui o antigo `extends: ["prettier"]`
  eslintConfigPrettier,
]);
