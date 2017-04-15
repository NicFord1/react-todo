import firebase, {firebaseRef, gitHubProvider, googleProvider} from 'app/firebase';
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

export var startAddToDos = () => {
  return (dispatch, getState) => {
    var toDosRef = firebaseRef.child('toDos');

    //    return toDosRef.on('value', (snapshot) => {
    // Allows for real-time update in client, though creates duplicates in ToDos &
    // throws warning in console [Warning: flattenChildren(...): Encountered two
    // children with the same key. Child keys must be unique; when two children
    // share a key, only the first child will be used.
    // in div (created by ToDoList)
    // in ToDoList (created by Connect(ToDoList))
    // in Connect(ToDoList) (created by ToDoApp)
    // in div (created by ToDoApp)
    // in div (created by ToDoApp)
    // in div (created by ToDoApp)
    // in div (created by ToDoApp)
    // in ToDoApp
    // in Provider]
    return toDosRef.once('value').then((snapshot) => {
      var toDos = snapshot.val() || {};
      var parsedToDos = [];

      Object.keys(toDos).forEach((toDoID) => {
        parsedToDos.push({
          id: toDoID,
          ...toDos[toDoID]
        });
      });

      dispatch(addToDos(parsedToDos));
    });
  };
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

export var login = (uid) => {
  return {type: 'LOGIN', uid};
};

export var startLogin = (provider = gitHubProvider) => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(provider).then((result) => {
      console.log('Auth worked!', result);
    }, (e) => {
      console.log('Unable to Auth', e);
    });
  };
};

export var logout = () => {
  return {type: 'LOGOUT'};
};

export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged Out!');
    });
  };
};
