import React from 'react';
import {connect} from 'react-redux';

import ToDoAPI from 'app/api/ToDoAPI';
import ToDo from 'app/components/ToDo';

export class ToDoList extends React.Component {
  render() {
    var {toDos, showCompleted, searchText} = this.props;
    var filteredToDos = ToDoAPI.filterToDos(toDos, showCompleted, searchText);
    var renderToDos = () => {
      if (filteredToDos.length === 0) {
        return (
          <p className="container__message">Sit back & relax, you have nothing to do!</p>
        );
      }
      return filteredToDos.map((toDo) => {
        return (<ToDo key={toDo.id} {...toDo}/>);
      });
    };

    return (<div>{renderToDos()}</div>);
  }
}

export default connect((state) => {return state;})(ToDoList);
