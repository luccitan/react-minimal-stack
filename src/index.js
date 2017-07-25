import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Application from './components/Application';

const root = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );

render(Application);
if (module.hot) {
  module.hot.accept('./components/Application', () => {
    const _Application = require('./components/Application').default;
    render(_Application);
  });
}
