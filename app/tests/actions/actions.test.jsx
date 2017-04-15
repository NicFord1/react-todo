import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase';
import * as actions from 'app/actions/actions';

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('should generate set search text action', () => {
    const action = {type: 'SET_SEARCH_TEXT', searchText: 'some search text'};
    const res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    const action = {type: 'TOGGLE_SHOW_COMPLETED'};
    const res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate add ToDo action', () => {
    const action = {
      type: 'ADD_TODO',
      toDo: {
        id: '123abc',
        text: 'some task',
        completed: false,
        createdAt: 10301985
      }
    };
    const res = actions.addToDo(action.toDo);

    expect(res).toEqual(action);
  });

  it('should generate add ToDos action', () => {
    var toDos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: null,
      createdAt: 10301985
    }];
    const action = {type: 'ADD_TODOS', toDos};
    const res = actions.addToDos(action.toDos);

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

  describe('Firebase Auth', () => {
    it('should generate login action object', () => {
      const action = {type: 'LOGIN', uid: '123abc'};
      const res = actions.login(action.uid);

      expect(res).toEqual(action);
    });

    it('should generate logout action object', () => {
      const action = {type: 'LOGOUT'};
      const res = actions.logout();

      expect(res).toEqual(action);
    });
  });

  describe('Tests with Firebase toDos', () => {
    var testToDoRef;
    var uid;
    var toDosRef;

    beforeEach((done) => {
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid;
        toDosRef = firebaseRef.child(`users/${uid}/toDos`);

        return toDosRef.remove();
      }).then(() => {
        testToDoRef = toDosRef.push();
        return testToDoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 10301985
        });
      }).then(() => done()).catch(done);
    });

    afterEach((done) => {
      toDosRef.remove().then(() => done());
    });

    it('should toggle toDo & dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startToggleToDo(testToDoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({type: 'UPDATE_TODO', id: testToDoRef.key});
        expect(mockActions[0].updates).toInclude({completed: true});
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });

    it('should populate toDos & dispatch ADD_TODOS', (done) => {
      const store = createMockStore({auth: {uid}});
      const action = actions.startAddToDos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].toDos.length).toEqual(1);
        expect(mockActions[0].toDos[0].text).toEqual('Something to do');
        done();
      }).catch(done);
    });

    it('should create toDo & dispatch ADD_TODO', (done) => {
      const store = createMockStore({auth: {uid}});
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
  });
});
