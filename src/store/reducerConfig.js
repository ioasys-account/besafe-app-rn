import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

export const configReducer = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  if (__DEV__) {
    middlewares.push(logger);
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  sagaMiddleware.run(rootSaga);

  return store;
};
