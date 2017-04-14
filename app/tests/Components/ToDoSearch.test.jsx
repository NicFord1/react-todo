import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import $ from 'jQuery';

import {ToDoSearch} from 'app/components/ToDoSearch';

describe('ToDoSearch', () => {
  it('should exist', () => {
    expect(ToDoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);
    var searchText = 'Clean Litter Boxes';
    var action = {type: 'SET_SEARCH_TEXT', searchText};

    toDoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(toDoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox toggled', () => {
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>);
    var action = {type: 'TOGGLE_SHOW_COMPLETED'};

    toDoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(toDoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
