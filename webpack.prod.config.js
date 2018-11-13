const webpack = requre("webpack")
const path = require("path")
const merge = require("webpack-merge")
const baseConfig = require("./webpack.config.js")

module.exports = merge(baseConfig, {
    output: {
        filename: "[name].min.js"
    },
    devtool: "cheap-module-source-map"
})