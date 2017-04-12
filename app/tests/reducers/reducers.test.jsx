var expect = require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {type: 'SET_SEARCH_TEXT', searchText: 'dog'};
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {type: 'TOGGLE_SHOW_COMPLETED'};
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('toDosReducer', () => {
    it('should add new ToDo', () => {
      var action = {type: 'ADD_TODO', text: 'Walk the Dog'};
      var res = reducers.toDosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle completed status of ToDo', () => {
      var testToDos = [{
          id: 1,
          text: 'task 1',
          completed: true,
          createdAt: 123,
          completedAt: 275
        }];
      var action = {type: 'TOGGLE_TODO', id: 1};
      var res = reducers.toDosReducer(df(testToDos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});
