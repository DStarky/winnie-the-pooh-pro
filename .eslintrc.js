module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
		"plugin:react-hooks/recommended"
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
		'react'
	],
	'rules': {
		"react/prop-types": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"indent": ["error", "tab"],
		"react/button-has-type": "warn",
		"no-console": "warn",
		"arrow-body-style": ["error", "as-needed"],
		"react/self-closing-comp": ["error", { "component": true, "html": true }],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				"prefer": "type-imports",
			}
		],
		"react-hooks/exhaustive-deps": "error",
	}
};
