const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Function to generate entry configurations dynamically
function generateEntry(pageName) {
    const jsPath = "./assets/js/pages/";
    const scssPath = "./assets/scss/pages/";
    const defaultJS = "default.js";
    const defaultSCSS = "default.scss";

    return [
        jsPath + `${pageName}.js`,
        jsPath + defaultJS,
        scssPath + `${pageName}.scss`,
        scssPath + defaultSCSS,
    ];
}

module.exports = {
    mode: "production",
    entry: {
        default: [
            "./assets/js/pages/default.js",
            "./assets/scss/pages/default.scss",
        ],
        // home: [
        //     "./assets/js/pages/home.js",
        //     "./assets/scss/pages/home.scss",
        // ],
        // contact: [
        //     "./assets/js/pages/contact.js",
        //     "./assets/scss/pages/contact.scss",
        // ]
        // default: generateEntry("default"),
        home: generateEntry("home"),
        contact: generateEntry("contact"),
        // Add more entries as needed
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
