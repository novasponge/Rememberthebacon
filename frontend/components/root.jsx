import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './home';
import AppContainer from './app/app_container'
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/app');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={Home} onEnter={_redirectIfLoggedIn}/>
        <Route path='/login' component={LoginFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path='/signup' component={SignupFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path='/app' component={AppContainer} />
      </Router>
    </Provider>
  )
};


export default Root;
