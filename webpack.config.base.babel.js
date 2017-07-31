import path from 'path';
import webpack from 'webpack';

export default {

  entry: ['./src/index'],

  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  resolve: {
    alias: {
      source: path.resolve(__dirname, 'src'),
      actions: path.resolve(__dirname, 'src/actions'),
      state: path.resolve(__dirname, 'src/state'),
      components: path.resolve(__dirname, 'src/components')
    }
  },

  plugins: [],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }

};
