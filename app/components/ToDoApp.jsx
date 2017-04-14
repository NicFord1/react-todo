import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import ToDoSearch from 'app/components/ToDoSearch';
import ToDoList from 'app/components/ToDoList';
import AddToDo from 'app/components/AddToDo';

class ToDoApp extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-title">ToDo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <ToDoSearch/>
              <ToDoList/>
              <AddToDo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = ToDoApp;
