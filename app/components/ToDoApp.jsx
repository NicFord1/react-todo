var React = require('react');
var uuid = require('node-uuid');

var ToDoAPI = require('ToDoAPI');
var ToDoSearch = require('ToDoSearch');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      toDos: ToDoAPI.getToDos()
    }
  },
  componentDidUpdate: function() {
    ToDoAPI.setToDos(this.state.toDos);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleCompleted: function(id) {
    var updatedToDos = this.state.toDos.map((toDo) =>{
      if(toDo.id === id) {
        toDo.completed = !toDo.completed;
      }

      return toDo;
    });

    this.setState({toDos: updatedToDos});
  },
  handleAddToDo: function(text) {
    this.setState({
      toDos: [
        ...this.state.toDos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  render: function() {
    var {toDos} = this.state;

    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch}/>
        <ToDoList toDos={toDos} onCompleted={this.handleCompleted}/>
        <AddToDo onAddToDo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = ToDoApp;
