module.exports = {
    extends: [
        'react-app',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    plugins: ['react', '@typescript-eslint', 'jest'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
        extraFileExtensions: [
            '.less'
        ]
    },
    rules: {
        'linebreak-style': 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        'no-console': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-else-return': 'off'
    }
};