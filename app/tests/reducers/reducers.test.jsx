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

    it('should update ToDo', () => {
      var testToDos = [{
          id: '123abc',
          text: 'task 1',
          completed: true,
          createdAt: 123,
          completedAt: 275
        }];
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {type: 'UPDATE_TODO', id: testToDos[0].id, updates };
      var res = reducers.toDosReducer(df(testToDos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(testToDos[0].text);
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
