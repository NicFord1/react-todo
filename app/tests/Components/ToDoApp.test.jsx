var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
  it('should exist', () => {
    expect(ToDoApp).toExist();
  });

  it('should add ToDo to the toDos state on handleAddToDo', () => {
    var toDoText = 'test text';
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

    toDoApp.setState({toDos: []});
    toDoApp.handleAddToDo(toDoText);

    expect(toDoApp.state.toDos[0].text).toBe(toDoText);
  });

  it('should toggle completed value when handleCompleted called', () => {
    var toDoData = {
      id: 11,
      text: 'Test Features',
      completed: false
    }
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({toDos: [toDoData]});

    expect(toDoApp.state.toDos[0].completed).toBe(false);
    toDoApp.handleCompleted(toDoData.id);
    expect(toDoApp.state.toDos[0].completed).toBe(true);
  });
});
