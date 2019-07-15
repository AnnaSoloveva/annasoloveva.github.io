module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/prettier',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:sonarjs/recommended'
    ],
    plugins: ['sonarjs'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    settings: {
        'import/ignore': ['.scss', '.less', '.css'],
        'import/extensions': ['.js', '.jsx', 'vue']
    }
}
