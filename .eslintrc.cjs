require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "@nuxt/eslint-config",
    "@vue/eslint-config-prettier",
    "plugin:@typescript-eslint/recommended-type-checked",
  ],
};
