var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require('ToDoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var ToDoAPI = require('ToDoAPI');

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
require('applicationStyles');

//Main App Code
ReactDOM.render(
  <Provider store={store}>
    <ToDoApp/>
  </Provider>,
  document.getElementById('app')
);
