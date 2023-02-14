const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(123)
console.log(path.join(__dirname, "src", "index.tsx"))

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        path:path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
    ],
}
