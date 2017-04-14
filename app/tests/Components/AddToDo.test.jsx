import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import $ from 'jQuery';

import * as actions from 'app/actions/actions';
import {AddToDo} from 'app/components/AddToDo';

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
