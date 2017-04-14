import expect from 'expect';
import df from 'deep-freeze-strict';
import moment from 'moment';

import * as reducers from 'app/reducers/reducers';

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
      var action = {
        type: 'ADD_TODO',
        toDo: {
          id: 'abc123',
          text: 'some task',
          completed: false,
          createdAt: 10301985
        }
      };
      var res = reducers.toDosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.toDo);
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

    it('should add existing ToDos', () => {
      var toDos = [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 31985
      }];
      var action = {type: 'ADD_TODOS', toDos};
      var res = reducers.toDosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(toDos[0]);
    });
  });
});
