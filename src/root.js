import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './pages/App';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>, document.getElementById('root')
);

if (module.hot) {
  console.log(123)
  module.hot.accept('./pages/App.jsx', () => {
    const NextRootContainer = require('./pages/App.jsx').default;
    render(NextRootContainer);
  });
}
