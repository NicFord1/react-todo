var React = require('react');
var ToDo = require('ToDo');

var ToDoList = React.createClass({
  render: function() {
    var {toDos} = this.props;
    var renderToDos = () => {
      if (toDos.length === 0) {
        return (
          <p className="container__message">Sit back & relax, you have nothing to do!</p>
        );
      }
      return toDos.map((todo) => {
        return (
          <ToDo key={todo.id} {...todo} onCompleted={this.props.onCompleted}/>
        );
      });
    };

    return (
      <div>
        {renderToDos()}
      </div>
    )
  }
});

module.exports = ToDoList;
