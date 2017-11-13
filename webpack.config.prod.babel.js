import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import base, { CSSModule } from './webpack.config.base.babel';

const extractAPPSTYLE = new ExtractTextPlugin({
  filename: 'stylesheets/app.css'
});

export default {

  ...base,

  entry : [
    'source/index.dev',
    'styles/Base.less',
    ...base.entry
  ],

  module: {
    rules: [
      ...base.module.rules, {
        test: /\.(le|c)ss$/,
        exclude: [ path.resolve(__dirname, 'src/styles/Base.less'), ],
        loader: extractAPPSTYLE.extract({
          fallback: 'style-loader',
          use: [`css-loader?${CSSModule}`, 'less-loader'],
        }),
      },
    ],
  },

  plugins: [
    ...base.plugins,
    extractAPPSTYLE,
  ],

};
