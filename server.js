import { join } from 'path';
import webpack from 'webpack';
import express from 'express';
import config from './webpack.config.dev.babel';

const app = express();
const compiler = webpack(config);
const port = process.env.PORT || 8080;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use('/', express.static(__dirname));

app.listen(port, function(err) {
  if (err) { return console.error(err); }

  console.log(`Listening at http://localhost:${port}`);
});
