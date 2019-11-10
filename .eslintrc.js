module.exports = {
  extends: ["codingitwrong"],
  parser: "babel-eslint",
  plugins: ["jest", "react"],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    "comma-dangle": ["error", "never"],
    "linebreak-style": 0,
    semi: 0
  }
};
