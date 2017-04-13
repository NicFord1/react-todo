var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} =require('react-redux');
var TestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jquery');

import {configure} from 'configureStore';
import ConnectedToDoList, {ToDoList} from 'ToDoList';
import ConnectedToDo, {ToDo} from 'ToDo';

describe('ToDoList', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render one ToDo component for each toDos item', () => {
    var toDos = [{
      id: 1,
      text: 'Do Something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id: 2,
      text: 'Check Mail',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];
    var store = configure({toDos});
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedToDoList/>
      </Provider>
    )
    var toDoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0];
    var toDosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ConnectedToDo);

    expect(toDosComponents.length).toBe(toDos.length);
  });

  it('should render empty message if no toDos', () => {
    var toDos = [];
    var toDoList = TestUtils.renderIntoDocument(<ToDoList toDos={toDos}/>);
    var $el = $(ReactDOM.findDOMNode(toDoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
