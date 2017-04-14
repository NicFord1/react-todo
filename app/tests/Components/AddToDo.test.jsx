var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-dom/test-utils');
import expect from 'expect';
var $ = require('jQuery');

import * as actions from 'app/actions/actions';

var {AddToDo} = require('app/components/AddToDo');

describe('AddToDo', () => {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should dispatch ADD_TODO when valid toDo text', () => {
    var spy = expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));
    var testToDoText = 'Clean Litter Boxes';
    var action = actions.startAddToDo(testToDoText);

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
