import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'



document.addEventListener('DOMContentLoaded', ()=>{
  let preloadedState;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  } else {
    preloadedState = {};
  }
  const store = configureStore(preloadedState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
