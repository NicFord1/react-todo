var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var ToDoAPI = require('ToDoAPI');
import ToDoSearch from 'ToDoSearch';
import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';

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
  handleAddToDo: function(text) {
    this.setState({
      toDos: [
        ...this.state.toDos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  render: function() {
    var {toDos, showCompleted, searchText} = this.state;
    var filteredToDos = ToDoAPI.filterToDos(toDos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">ToDo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <ToDoSearch onSearch={this.handleSearch}/>
              <ToDoList/>
              <AddToDo onAddToDo={this.handleAddToDo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ToDoApp;
