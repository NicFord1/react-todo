var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render one ToDo component for each toDos item', () => {
    var toDos = [{
      id: 1,
      text: 'Do Something'
    }, {
      id: 2,
      text: 'Check Mail'
    }];

    var todoList = TestUtils.renderIntoDocument(<ToDoList toDos={toDos}/>);
    var toDosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ToDo);

    expect(toDosComponents.length).toBe(toDos.length);
  });
});
