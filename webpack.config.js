const { resolve } = require('path')

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  externals: {
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components'
    }
  },
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.min.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      // Linter
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },

      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015', 'react'
          ],
          plugins: [
            'transform-object-rest-spread'
          ]
        }
      },

      // CSS
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
}
