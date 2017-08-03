import path from 'path';
import webpack from 'webpack';
import base, {cssLoader} from './webpack.config.base.babel';

export default {

  ...base,

  output : {
    ...base.output,
    library: 'app',
    libraryExport: 'default'
  },

  entry : [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-hot-middleware/client?quiet=true',
    './src/index.dev',
    ...base.entry
  ],

  module : {
    rules: [
      ...base.module.rules, {
        test: /\.(le|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ],
      },
    ],
  },

  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors,
    ...base.plugins
  ]
};
