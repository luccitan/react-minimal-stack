import ExtractTextPlugin from 'extract-text-webpack-plugin';
import base, { cssLoader } from './webpack.config.base.babel';

export default {

  ...base,

  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: cssLoader,
        })
      },
    ],
  },

  plugins: [
    ...base.plugins,
    new ExtractTextPlugin({ filename: '[name].css' })
  ],

};
