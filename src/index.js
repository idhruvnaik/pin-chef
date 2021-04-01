import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import jquery from '../node_modules/jquery'
import './base.css'
import './form.css'
import './reset.css'
import './media.css'
import { Provider } from "react-redux";
import configureStore from "./store";

// ACTION


// REDUCER


// STORE

// store.subscribe(() => console.log(store.getState()));

// DISPATCH
// store.dispatch(addToken());
// store.dispatch(removeToken());
// store.dispatch(signIn());

// console.log("after dispatch")
// DISPLAY
// store.subscribe(() => console.log(store.getState()));


ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
