var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import ToDoApp from 'app/components/ToDoApp';
import * as actions from 'app/actions/actions';
var store = require('app/store/configureStore').configure();
import ToDoAPI from 'app/api/ToDoAPI';

store.subscribe(() => {
  var state = store.getState();

  console.log('New State', state);
  ToDoAPI.setToDos(state.toDos);
});

var initialToDos = ToDoAPI.getToDos();
store.dispatch(actions.addToDos(initialToDos));

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
