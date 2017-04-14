var React = require('react');
var {connect} = require('react-redux');

import ToDoAPI from 'app/api/ToDoAPI';
import ToDo from 'app/components/ToDo';

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
