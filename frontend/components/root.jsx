import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const Root = ({ store }) => {
  let path;

  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>

        </Route>
        <Route path='/login' component={LoginFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path='/signup' component={SignupFormContainer} onEnter={_redirectIfLoggedIn} />
      </Router>
    </Provider>
  )
};


export default Root;
