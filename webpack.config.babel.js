import { join } from 'path';
import webpack from 'webpack';

export default {

  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-hot-middleware/client?quiet=true',
    './src/index'
  ],

  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      include: join(__dirname, 'src')
    }]
  }

};
