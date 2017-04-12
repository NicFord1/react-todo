var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

export var AddToDo = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var toDoText = this.refs.toDoText.value;

    if (toDoText.length > 0) {
      this.refs.toDoText.value = '';
      dispatch(actions.addToDo(toDoText));
    } else {
      this.refs.toDoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form ref="add-todo" onSubmit={this.handleSubmit} className="add-todo-form">
          <input type="text" ref="toDoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add ToDo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddToDo);
