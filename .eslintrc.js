module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      'airbnb-base',
      'plugin:import/typescript',
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: [
      '@typescript-eslint/eslint-plugin',
   ],
   rules: {
      'import/extensions': [
         'error',
         'ignorePackages',
         {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
         },
      ],
      'max-len': 'off', // disables line length check
      'no-mixed-operators': 'off',
      'no-promise-executor-return': 'off',
      'require-jsdoc': 'off', // disables jsdoc check
      indent: ['error', 3],
   },
};
