var React = require('react');
var {connect} = require('react-redux');

import ToDo from 'ToDo';

export var ToDoList = React.createClass({
  render: function() {
    var {toDos} = this.props;
    var renderToDos = () => {
      if (toDos.length === 0) {
        return (
          <p className="container__message">Sit back & relax, you have nothing to do!</p>
        );
      }
      return toDos.map((toDo) => {
        return (
          <ToDo key={toDo.id} {...toDo}/>
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

export default connect(
  (state) => {
    return {toDos: state.toDos};
  }
)(ToDoList);
