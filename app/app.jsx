import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'app/actions/actions';
var store = require('app/store/configureStore').configure();
import firebase from 'app/firebase';
import router from 'app/router';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddToDos());
    hashHistory.push('/ToDo');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

//Load Foundation
$(document).foundation();

//App CSS
require('app/styles/app.scss');

//Main App Code
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
