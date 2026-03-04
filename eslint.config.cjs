  import js from "@eslint/js";
  import globals from "globals";
  import pluginVue from "eslint-plugin-vue";
  import { defineConfig } from "eslint";

  export default defineConfig([
    {
      files: ["**/*.{js,mjs,cjs,vue}"],
      languageOptions: { globals: globals.browser },
    },
    js.configs.recommended,
    pluginVue.configs["flat/essential"],
    {
      rules: {
        "vue/multi-word-component-names": "off",
      },
    },
  ]);
