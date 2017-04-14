import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import * as actions from 'app/actions/actions';

export class ToDo extends React.Component {
  render() {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var toDoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = completed ? 'Completed ' : 'Created ';
      var timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).format('MMM Do, Y @ HH:mm');
    };

    return (
      <div className={toDoClassName} onClick={() => {
        dispatch(actions.startToggleToDo(id, !completed));
      }}>
        <div>
          <input type="checkbox" checked={completed} id={id}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
}

export default connect()(ToDo);
