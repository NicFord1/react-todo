var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';
var TestUtils = require('react-dom/test-utils');
import expect from 'expect';
var $ = require('jquery');

import {configure} from 'app/store/configureStore';
import ToDoApp from 'app/components/ToDoApp';
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
