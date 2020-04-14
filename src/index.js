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
console.log('store', store)
console.log('provider', Provider)
console.log('appReducer', appReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}> 
      <App />
  </Provider>
  , rootElement);



  // here we wrapped up App inside Provider from react-redux library
  // in order to do so w/o crashing we needed to give it a store attribute
  // in order to do that we had to declare a store variable which is the return of the createStore function with our reducer param. Don't overthink this now just see how this is and make mental note that there is something here, an important connection. 