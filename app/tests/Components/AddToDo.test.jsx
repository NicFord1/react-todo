var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-dom/test-utils');
var expect = require('expect');
var $ = require('jQuery');

var {AddToDo} = require('AddToDo');

describe('AddToDo', () => {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should dispatch ADD_TODO when valid toDo text', () => {
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));
    var testToDoText = 'Clean Litter Boxes';
    var action = {type: 'ADD_TODO', text: testToDoText};

    addToDo.refs.toDoText.value = testToDoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid toDo text', () => {
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));
    var testToDoText = '';

    addToDo.refs.toDoText.value = testToDoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
