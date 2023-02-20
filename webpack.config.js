const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsconfig = path.resolve(__dirname, 'tsconfig.json');

console.log('start')

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),

        }),
    ],
    devServer: {
        port: 3030,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {compilerOptions: {noEmit: false},}
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: {limit: false},
            },
        ]
    }
}
