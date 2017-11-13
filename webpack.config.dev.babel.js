import path from 'path';
import webpack from 'webpack';
import base, { CSSModule } from './webpack.config.base.babel';

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
    'source/index.dev',
    'styles/Base.less',
    ...base.entry
  ],

  module : {
    rules: [
      ...base.module.rules, {
        test: /\.(le|c)ss$/,
        exclude: [ path.resolve(__dirname, 'src/styles/Base.less'), ],
        use: ['style-loader', `css-loader?${CSSModule}`, 'less-loader'],
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
