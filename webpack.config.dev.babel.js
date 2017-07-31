import path from 'path';
import webpack from 'webpack';
import base from './webpack.config.base.babel'

export default {

  ...base,

  output: {
    ...base.output,
    library: 'app',
    libraryExport: 'default',
  },

  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-hot-middleware/client?quiet=true',
    ...base.entry,
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors,
    ...base.plugins,
  ],

};
