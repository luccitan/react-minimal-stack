import ExtractTextPlugin from 'extract-text-webpack-plugin';
import base, { cssLoader } from './webpack.config.base.babel';

export default {

  ...base,

  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.(le|c)ss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
    ],
  },

  plugins: [
    ...base.plugins,
    new ExtractTextPlugin({ filename: '[name].css' })
  ],

};
