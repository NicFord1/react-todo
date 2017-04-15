import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import ToDoApp from 'app/components/ToDoApp';
import Login from 'app/components/Login';
import firebase from 'app/firebase';

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/ToDo');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="/ToDo" component={ToDoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
    </Route>
  </Router>
);
