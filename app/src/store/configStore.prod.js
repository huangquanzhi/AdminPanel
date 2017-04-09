import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleware = [thunk];

const enhancer = compose(
  applyMiddleware(...middleware),
);

export default function configStore(initialState) {

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
