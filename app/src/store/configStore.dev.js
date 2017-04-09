import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import DevTools from '../DevTools';
import rootReducer from '../reducers';

const middleware = [createLogger(), thunk];

const enhancer = compose(
  applyMiddleware(...middleware),
  DevTools.instrument()
);

export default function configStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}
