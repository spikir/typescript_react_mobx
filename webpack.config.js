const path = require('path');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = (env) => ({
  mode: env === 'prod' ? 'production' : 'development',
  devtool: false,
  entry: {
    client: './src/index.tsx',
  },

  performance: {
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000
  },

  optimization: {
    minimize: false //Update this to true or false
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },

  devServer: {
    historyApiFallback: true,
  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ]
      },
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin,
  ]
})
