import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

/**
 * ESLint em flat config (o `next lint` foi removido no Next 16).
 * Mesmas regras do antigo .eslintrc.json: next/core-web-vitals, sem a regra
 * de entidades não escapadas (textos em português usam aspas e apóstrofos).
 */
export default defineConfig([
  ...nextVitals,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "coverage/**", "next-env.d.ts"]),
]);
