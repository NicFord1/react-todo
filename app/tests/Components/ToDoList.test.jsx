import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import $ from 'jquery';

import {configure} from 'app/store/configureStore';
import ConnectedToDoList, {ToDoList} from 'app/components/ToDoList';
import ConnectedToDo, {ToDo} from 'app/components/ToDo';

describe('ToDoList', () => {
  it('should exist', () => {
    expect(ToDoList).toExist();
  });

  it('should render one ToDo component for each toDos item', () => {
    var toDos = [{
      id: 1,
      text: 'Do Something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id: 2,
      text: 'Check Mail',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];
    var store = configure({toDos});
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedToDoList/>
      </Provider>
    )
    var toDoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0];
    var toDosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ConnectedToDo);

    expect(toDosComponents.length).toBe(toDos.length);
  });

  it('should render empty message if no toDos', () => {
    var toDos = [];
    var toDoList = TestUtils.renderIntoDocument(<ToDoList toDos={toDos}/>);
    var $el = $(ReactDOM.findDOMNode(toDoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
