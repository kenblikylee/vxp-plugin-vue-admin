const htmlPlugin = require("html-webpack-plugin");
const cleanPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;

module.exports = {
  mode: "development",
  devtool: "source-map-inline",
  output: {
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/env', {
                  corejs: 3,
                  useBuiltIns: "entry"
                }], 
                ['@vue/jsx']
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new cleanPlugin(),
    new htmlPlugin({
      template: "public/index.html"
    })
  ]
}
