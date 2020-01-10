const path = require('path')
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['./src/root.js', 'react-hot-loader/patch'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|jsx)$/,
                include: /src/,
                loader: "eslint-loader",
                options: {
                    formatter: eslintFormatter,
                    emitWarning: true,
                }
            },
            {
                test: /\.(js|jsx)$/,
                include: /src/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["react-hot-loader/babel"]
                }
            },
            {
                test: /\.scss$/,
                include: /src/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                include: /src/,
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        alias: { 'react-dom': '@hot-loader/react-dom' }
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html')
    })]
};