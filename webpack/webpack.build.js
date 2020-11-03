const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, '../dist-webpack/'),
        filename: "[name].js"
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }

}
