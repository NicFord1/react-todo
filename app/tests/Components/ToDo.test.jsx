import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import $ from 'jquery';

import * as actions from 'app/actions/actions';
import {ToDo} from 'app/components/ToDo';

describe('ToDo', () => {
  it('should exist', () => {
    expect(ToDo).toExist();
  });

  it('should dispatch UPDATE_TODO action on click', () => {
    var toDoData = {
      id: 1985,
      text: 'Write ToDo.test.jsx test',
      completed: true
    };
    var action = actions.startToggleToDo(toDoData.id, !toDoData.completed);

    var spy = expect.createSpy();
    var toDo = TestUtils.renderIntoDocument(<ToDo {...toDoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(toDo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });
});
