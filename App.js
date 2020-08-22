import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import RouterComponent from './src/scenes/Router';
import {appReducer} from './src/data/reducers';
import thunk from 'redux-thunk';

const store = createStore(appReducer, {}, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <RouterComponent />
  </Provider>
);

export default App;
