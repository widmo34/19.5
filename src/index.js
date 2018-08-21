import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import  { createStore } from 'redux';
import { reducer } from './reducer';
import  actions  from './actions';


console.log(actions);
const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}><App /></Provider>,document.getElementById('root')
  );
registerServiceWorker();


store.dispatch(actions.addComment('pierwszy komentarz'));
store.dispatch(actions.addComment('drugi komentarz'));


