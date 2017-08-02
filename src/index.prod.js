import React from 'react';
import ReactDOM from 'react-dom';
import { root } from 'baobab-react/higher-order';

import Application from 'components/Application';
import state from 'source/state';
import actions from 'source/actions';

const RootedComponent = root(state, Application);
ReactDOM.render(<RootedComponent />, document.getElementById('root');
