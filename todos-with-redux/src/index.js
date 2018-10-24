import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers'
import './index.css';
import {addTodo} from './actions';
import App from './components/App';
const store = createStore(todoApp)
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
console.log(store.getState())
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
// Dispatch some actions
/* store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reduxxes')) */
ReactDOM.render( <Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));