
const path = require('path');

module.exports = {
    entry: './build/main.js',
    watch: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
