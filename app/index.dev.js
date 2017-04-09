import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './src/store';
import DevTools from './src/DevTools';
import BaseContainer from './src/containers/BaseContainer';

import './assets/css/main.scss';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <DevTools />
      <BaseContainer />
    </div>
  </Provider>,
document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept('./containers/BaseContainer', () => { render(BaseContainer); });
// }
