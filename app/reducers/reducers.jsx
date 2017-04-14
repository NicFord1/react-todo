import uuid from 'node-uuid';
import moment from 'moment';

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT': return action.searchText;
    default: return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED': return !state;
    default: return state;
  }
};

export var toDosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.toDo
      ];
    case 'TOGGLE_TODO':
      return state.map((toDo) => {
        if (toDo.id === action.id) {
          var nextCompleted = !toDo.completed;

          return {
            ...toDo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        } else {
          return toDo;
        }
      });
    case 'ADD_TODOS': return [...state, ...action.toDos];
    default: return state;
  }
};
