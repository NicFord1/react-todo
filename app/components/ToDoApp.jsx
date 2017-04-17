import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'app/actions/actions';
import ToDoSearch from 'app/components/ToDoSearch';
import ToDoList from 'app/components/ToDoList';
import AddToDo from 'app/components/AddToDo';

class BaseComponent extends React.Component {
  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }
}

export class ToDoApp extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('onLogout');
  }

  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }

  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
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

export default connect()(ToDoApp);
