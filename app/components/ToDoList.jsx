var React = require('react');
var ToDo = require('ToDo');

var ToDoList = React.createClass({
  render: function() {
    var {toDos} = this.props;
    var renderToDos = () => {
      return toDos.map((todo) => {
        return (
          <ToDo key={todo.id} {...todo}/>
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
