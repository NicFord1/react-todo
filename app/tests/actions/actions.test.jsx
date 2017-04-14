import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from 'app/actions/actions';

var createMockStore = configureMockStore([thunk]);

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
    var action = {
      type: 'ADD_TODO',
      toDo: {
        id: '123abc',
        text: 'some task',
        completed: false,
        createdAt: 10301985
      }
    };
    var res = actions.addToDo(action.toDo);

    expect(res).toEqual(action);
  });

  it('should create toDo & dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const testToDoText = 'Some Task';

    store.dispatch(actions.startAddToDo(testToDoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].toDo).toInclude({
        text: testToDoText
      });
      done();
    }).catch(done);
  });

  it('should generate add ToDos action', () => {
    var toDos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: null,
      createdAt: 10301985
    }];
    var action = {type: 'ADD_TODOS', toDos};
    var res = actions.addToDos(action.toDos);

    expect(res).toEqual(action);
  });

  it('should generate toggle ToDo action', () => {
    var action = {type: 'TOGGLE_TODO', id: 1};
    var res = actions.toggleToDo(action.id);

    expect(res).toEqual(action);
  });
});
