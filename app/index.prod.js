import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './src/store';
import BaseContainer from './src/containers/BaseContainer';

import './assets/css/main.scss';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
      <BaseContainer/>
    </Provider>,
    document.getElementById('root')
);
