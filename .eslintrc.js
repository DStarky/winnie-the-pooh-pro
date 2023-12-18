module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true
  },
  'extends': [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:react-hooks/recommended",
    "plugin:i18next/recommended",
    "plugin:storybook/recommended"
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'react',
    "i18next",
    "react-hooks"
  ],
  'rules': {
    "@typescript-eslint/no-unused-vars": "warn",
    "indent": ["error", 2],
    "no-console": "warn",
    "arrow-body-style": ["error", "as-needed"],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "type-imports",
      }
    ],
    // REACT Linting rules

    "react/button-has-type": "warn",
    "react/prop-types": "off",
    "react/self-closing-comp": ["error", { "component": true, "html": true }],
    "react/no-unstable-nested-components": "error",
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-fragments": "error",
    //React hooks
    "react-hooks/rules-of-hooks": "error", // Check rules of Hooks
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
    //Settings for i18next
    "i18next/no-literal-string": ["error", { markupOnly: true }],
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
