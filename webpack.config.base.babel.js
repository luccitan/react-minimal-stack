import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const extractBASE  = new ExtractTextPlugin('stylesheets/base.css');

export default {

  entry: [],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
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

  plugins: [extractBASE],

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
        },
      }, {
        test: /\.(png|jpe?g|gif|bmp)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'images/[hash].[ext]' },
        },
      }, {
        resource: [path.resolve(__dirname, 'src/styles/Base.less')],
        loader: extractBASE.extract({
          fallback: 'style-loader',
          use: ['css-loader?', 'less-loader'],
        }),
      },
    ],

  },

};

export const CSSModule = [
  'modules',
  'importLoaders=1',
  'localIdentName=[name]_[local]_[hash:base64:5]',
].join('&');
