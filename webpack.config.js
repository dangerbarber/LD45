const path = require('path')

/**
 * Generate a config for a JavaScript asset
 * @param  {string} slug      the slug of the target's output
 * @param  {string} name      the human-friendly name of the JSX config
 * @param  {object} entry     names and paths to js entrypoints in the config: {string name: string path}
 * @param  {object} externals names and values of external variables
 * @return {object}           a webpack config object, probably put it in module.exports
 */
module.exports = {
  mode: 'production',
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'ld45-[name].final.js'
  },

  optimization: {
    splitChunks: false,
    minimize: true
  },

  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 9000,
    liveReload: true,
    open: true,
    writeToDisk: true
  },

  name: 'Ludum Dare 45',
  entry: {
    main: './src/index.js'
  }
}
