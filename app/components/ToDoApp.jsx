var React = require('react');
var ToDoSearch = require('ToDoSearch');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Create Android App'
        }, {
          id: 3,
          text: 'Order SewMemories Items'
        }, {
          id: 4,
          text: 'Play Zelda'
        }
      ]
    }
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleAddToDo: function(text) {
    alert('new todo: ' + text);
  },
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch}/>
        <ToDoList todos={todos}/>
        <AddToDo onAddToDo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = ToDoApp;
