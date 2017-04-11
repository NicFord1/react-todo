var React = require('react');
var moment = require('moment');

var ToDo = React.createClass({
  render: function() {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var renderDate = () => {
      var message = completed ? 'Completed ' : 'Created ';
      var timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).format('MMM Do, Y @ HH:mm');
    };

    return (
      <div onClick={() => {
        this.props.onCompleted(id);
      }}>
        <input type="checkbox" checked={completed} id={id}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = ToDo;
