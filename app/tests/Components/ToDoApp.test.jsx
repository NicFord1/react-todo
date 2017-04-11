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
    expect(toDoApp.state.toDos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleCompleted called', () => {
    var toDoData = {
      id: 11,
      text: 'Test Features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({toDos: [toDoData]});

    expect(toDoApp.state.toDos[0].completed).toBe(false);
    toDoApp.handleCompleted(toDoData.id);
    expect(toDoApp.state.toDos[0].completed).toBe(true);
    expect(toDoApp.state.toDos[0].completedAt).toBeA('number');
  });

  it('should toggle toDo from completed to incomplete', () => {
    var toDoData = {
      id: 11,
      text: 'Test Features',
      completed: true,
      createdAt: 0,
      completedAt: 60
    }
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({toDos: [toDoData]});

    expect(toDoApp.state.toDos[0].completed).toBe(true);
    toDoApp.handleCompleted(toDoData.id);
    expect(toDoApp.state.toDos[0].completed).toBe(false);
    expect(toDoApp.state.toDos[0].completedAt).toNotExist();
  });
});
