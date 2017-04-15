import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Login from 'app/components/Login';
import ToDoApp from 'app/components/ToDoApp';
import * as actions from 'app/actions/actions';
var store = require('app/store/configureStore').configure();
import ToDoAPI from 'app/api/ToDoAPI';

store.dispatch(actions.startAddToDos());

//Load Foundation
$(document).foundation();

//App CSS
require('app/styles/app.scss');

//Main App Code
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="/ToDo" component={ToDoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
