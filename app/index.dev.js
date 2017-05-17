import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'jquery';
import 'bootstrap-loader';
import configStore from './src/store';
import DevTools from './src/DevTools';
import BaseContainer from './src/containers/BaseContainer';

import './assets/css/menu.less';

const store = configStore();

const renderApp = () => {
  render(
    <Provider store={store}>
      <div>
        <DevTools />
        <BaseContainer />
      </div>
    </Provider>,
  document.getElementById('root')
  );
};

renderApp();
