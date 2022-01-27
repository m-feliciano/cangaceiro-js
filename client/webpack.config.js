const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');
let plugins = []
if (process.env.NODE_ENV === 'production') {
    plugins.push(new babiliPlugin());
}

module.exports = {
    mode: "development",
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
        //shorthand plugins:	plugins
    }, plugins

}