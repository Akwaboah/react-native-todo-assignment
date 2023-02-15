import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootEpic from '../epics/index';

import rootReducer, { initialState } from './index';

const composeEnhancer = composeWithDevTools({
  name: 'React Clean Architecture',
});

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
