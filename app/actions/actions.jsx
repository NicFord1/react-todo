import firebase, {firebaseRef} from 'app/firebase';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {type: 'SET_SEARCH_TEXT', searchText};
};

export var toggleShowCompleted = () => {
    return {type: 'TOGGLE_SHOW_COMPLETED'};
};

export var addToDo = (toDo) => {
  return {type: 'ADD_TODO', toDo};
};

export var startAddToDo = (text) => {
  return (dispatch, getState) => {
    var toDo = {
        text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null
    };
    var toDoRef = firebaseRef.child('toDos').push(toDo);

    return toDoRef.then(() => {
      dispatch(addToDo({...toDo, id: toDoRef.key}));
    });
  };
};

export var addToDos = (toDos) => {
  return {type: 'ADD_TODOS', toDos};
};

export var updateToDo = (id, updates) => {
  return {type: 'UPDATE_TODO', id, updates};
};

export var startToggleToDo = (id, completed) => {
  return (dispatch, getState) => {
    var toDoRef = firebaseRef.child(`toDos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return toDoRef.update(updates).then(() => {
      dispatch(updateToDo(id, updates));
    });
  };
};
