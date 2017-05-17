import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'jquery';
import 'bootstrap-loader';
import configStore from './src/store';
import BaseContainer from './src/containers/BaseContainer';

import './assets/css/core.less';
import './assets/css/menu.less';
import './assets/css/elements.less';
import './assets/css/responsive.less';
import './assets/css/variables.less';
import './assets/css/icons.less';

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
      <BaseContainer/>
    </Provider>,
    document.getElementById('root')
);
