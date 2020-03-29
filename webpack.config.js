const path = require('path')

module.exports = (env) => ({
  mode: env === 'prod' ? 'production' : 'development',
  
  entry: {
    client: './src/index.tsx',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
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
    ],
  },
})
