const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: {
        home: [
            "./assets/js/pages/home.js",
            "./assets/scss/pages/home.scss",
        ],
        contact: [
            "./assets/js/pages/contact.js",
            "./assets/scss/pages/contact.scss",
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "[name].min.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/[name].min.css",
        }),
    ],
};
