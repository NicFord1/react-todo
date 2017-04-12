var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var ToDoApp = require('ToDoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState());
});

store.dispatch(actions.addToDo('Clean Apartment'));
store.dispatch(actions.setSearchText('clean'));
store.dispatch(actions.toggleShowCompleted());

//Load Foundation
$(document).foundation();

//App CSS
require('applicationStyles');

//Main App Code
ReactDOM.render(
  <ToDoApp/>,
  document.getElementById('app')
);
