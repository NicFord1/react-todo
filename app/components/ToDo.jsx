var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');

var actions = require('actions');

export var ToDo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var toDoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = completed ? 'Completed ' : 'Created ';
      var timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).format('MMM Do, Y @ HH:mm');
    };

    return (
      <div className={toDoClassName} onClick={() => {
        dispatch(actions.toggleToDo(id));
      }}>
        <div>
          <input type="checkbox" checked={completed} id={id}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(ToDo);
