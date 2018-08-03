const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './ex/index.js',
    output:{
        path: __dirname + "/public", //vai gerar os arquivos aqui
        filename: "./bundle.js" //o nome do arquivo gerado.
    },
    devServer: {
        port: 8080, //porta do servidor
        contentBase: "./public" //onde vai pegar os arquivos.
    },
    plugins: [
        new ExtractTextPlugin("app.css")
    ],
    module: {
        loaders: [{
            test: /.js?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            query:{
                presets: ["es2015", "react"],
                plugins: ["transform-object-rest-spread"]
            }
        },{
            test:/\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
};