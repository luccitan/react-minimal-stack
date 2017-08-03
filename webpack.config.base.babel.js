import path from 'path';
import webpack from 'webpack';

export default {

  entry: [],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  resolve: {
    alias: {
      source: path.resolve(__dirname, 'src'),
      actions: path.resolve(__dirname, 'src/actions'),
      state: path.resolve(__dirname, 'src/state'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles'),
    }
  },

  plugins: [],

  module: {
    rules: [{
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src')
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'fonts/[hash].[ext]' },
        }
      }, {
        test: /\.(png|jpe?g|gif|bmp)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'images/[hash].[ext]' },
        }
      }
    ]
  }

};
