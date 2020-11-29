const path = require('path');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
    entry: './build/app.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'script.js'
    },
    module: {
        rules: [{
            test: /\.(sass|scss)$/,
            use: [MiniCss.loader, 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new MiniCss({
            filename: 'style.css'
        })
    ]
};