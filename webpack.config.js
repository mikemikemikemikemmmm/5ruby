var path = require('path')
module.exports = {
    entry: './src/root.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                include: /src/,
                loader: "eslint-loader",
                options:{
                }
            },
            {
                test: /\.js$/,
                include: /src/,
                loader: "babel-loader",
            },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
};