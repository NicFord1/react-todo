import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

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
    <ToDoApp/>
  </Provider>,
  document.getElementById('app')
);
