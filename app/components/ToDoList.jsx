var React = require('react');
var {connect} = require('react-redux');

var ToDoAPI = require('ToDoAPI');
import ToDo from 'ToDo';

export class ToDoList extends React.Component {
  render() {
    var {toDos, showCompleted, searchText} = this.props;
    var renderToDos = () => {
      if (toDos.length === 0) {
        return (
          <p className="container__message">Sit back & relax, you have nothing to do!</p>
        );
      }
      return ToDoAPI.filterToDos(toDos, showCompleted, searchText).map((toDo) => {
        return (<ToDo key={toDo.id} {...toDo}/>);
      });
    };

    return (<div>{renderToDos()}</div>);
  }
}

export default connect((state) => {return state;})(ToDoList);
