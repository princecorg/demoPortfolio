module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    // Indentation de 2 espaces
    indent: ["error", 2, { SwitchCase: 1 }],
    // Point-virgule à la fin des instructions
    semi: ["error", "always"],
    // Utilisation de '==='
    eqeqeq: ["error", "always"],
    // Eviter les espaces avant et après les parenthèses
    "space-in-parens": ["error", "never"],
    // Espace avant et après les opérateurs
    "space-infix-ops": "error",
    // Eviter les espaces avant les crochets
    "computed-property-spacing": ["error", "never"],
    // Utilisation de let ou const au lieu de var
    "no-var": "error",
    // Ne pas déclarer de variables non utilisées
    "no-unused-vars": "error",
  },
};
