var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jquery');

var {ToDo} = require('ToDo');

describe('ToDo', () => {
  it('should exist', () => {
    expect(ToDo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    var toDoData = {
      id: 1985,
      text: 'Write ToDo.test.jsx test',
      completed: true
    };
    var spy = expect.createSpy();
    var toDo = TestUtils.renderIntoDocument(<ToDo {...toDoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(toDo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: toDoData.id
    });
  });
});
