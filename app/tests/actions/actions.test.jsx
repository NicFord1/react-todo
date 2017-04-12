var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate set search text action', () => {
    var action = {type: 'SET_SEARCH_TEXT', searchText: 'some search text'};
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {type: 'TOGGLE_SHOW_COMPLETED'};
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add ToDo action', () => {
    var action = {type: 'ADD_TODO', text: 'something to do'};
    var res = actions.addToDo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate toggle ToDo action', () => {
    var action = {type: 'TOGGLE_TODO', id: 1};
    var res = actions.toggleToDo(action.id);

    expect(res).toEqual(action);
  });
});
