var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var ToDoSearch = require('ToDoSearch');

describe('ToDoSearch', () => {
  it('should exist', () => {
    expect(ToDoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);
    var testSearchText = 'Clean Litter Boxes';

    toDoSearch.refs.searchText.value = testSearchText;
    TestUtils.Simulate.change(toDoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, testSearchText);
  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

    toDoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(toDoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
