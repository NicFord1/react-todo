import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase';
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

  it('should generate update ToDo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: '123abc',
      updates: {completed: false}
    };
    var res = actions.updateToDo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe('Tests with Firebase toDos', () => {
    var testToDoRef;

    beforeEach((done) => {
      var toDosRef = firebaseRef.child('toDos');

      toDosRef.remove().then(() => {
        testToDoRef = firebaseRef.child('toDos').push();

        return testToDoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 10301985
        });
      }).catch(done).then(() => done());
    });

    afterEach((done) => {
      testToDoRef.remove().then(() => done());
    });

    it('should toggle toDo & dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleToDo(testToDoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({type: 'UPDATE_TODO', id: testToDoRef.key});
        expect(mockActions[0].updates).toInclude({completed: true});
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });

    it('should add toDos & dispatch ADD_TODOS', (done) => {
      const store = createMockStore({});
      const action = actions.startAddToDos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].toDos.length).toEqual(1);
        expect(mockActions[0].toDos[0].text).toEqual('Something to do');
        done();
      }).catch(done);
    });
  });
});
