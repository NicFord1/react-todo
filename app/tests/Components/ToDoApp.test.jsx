import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import $ from 'jquery';

import {configure} from 'app/store/configureStore';
import {ToDoApp} from 'app/components/ToDoApp';
import ToDoList from 'app/components/ToDoList';

describe('ToDoApp', () => {
  it('should exist', () => {
    expect(ToDoApp).toExist();
  });

  it('should render ToDoList', () => {
    var store = configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ToDoApp/>
      </Provider>
    );

    var toDoApp = TestUtils.scryRenderedComponentsWithType(provider, ToDoApp)[0];
    var toDoList = TestUtils.scryRenderedComponentsWithType(toDoApp, ToDoList);

    expect(toDoList.length).toEqual(1);
  });
});
