import path from 'path';
import webpack from 'webpack';

export const cssLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 1,
    localIdentName: '[name]_[local]_[hash:base64:5]',
  }
};

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
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }

};
