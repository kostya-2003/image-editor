const path = require('path');

module.exports = {
    mode: 'development',
    entry: '/src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'all.js',
    },
    watch: true
};