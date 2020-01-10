import 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';

import Index from './pages/index'

ReactDOM.render(
  <AppContainer>
    <Index />
  </AppContainer>, document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./pages/index.jsx', () => {
    const NextRootContainer = require('./pages/index.jsx').default;
    render(NextRootContainer);
  });
}