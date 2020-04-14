import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {appReducer} from './reducers/appReducer'

import 'bulma/css/bulma.css';
import './styles.scss';

// Step 1 Create the redux store and connect it to our React app
const store = createStore(appReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}> 
      <App />
  </Provider>
  , rootElement);
