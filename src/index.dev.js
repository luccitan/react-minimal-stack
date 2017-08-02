import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { root } from 'baobab-react/higher-order';

import Application from 'components/Application';
import state from 'source/state';
import actions from 'source/actions';

const rootElement = document.getElementById('root');
const render = Component => {
  const RootedComponent = root(state, Component);
  ReactDOM.render(
    <AppContainer>
      <RootedComponent />
    </AppContainer>,
    rootElement
  );
}

render(Application);
if (module.hot) {
  module.hot.accept('./components/Application', () => {
    const _Application = require('./components/Application').default;
    render(_Application);
  });
}

export default {
  actions,
  state,
};
