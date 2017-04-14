var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules'
    ],
    alias: {app: 'app'},
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0']
          }
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.resolve(__dirname, './app/styles'),
                path.resolve(__dirname, './node_modules/foundation-sites/scss')
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
