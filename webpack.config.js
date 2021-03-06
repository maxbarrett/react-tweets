const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './app.js',
    resolve: {
        root: path.resolve(__dirname),
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        filename: 'bundle.js',
        path: './public/js/',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules)/,
            },
        ],
    },
};
