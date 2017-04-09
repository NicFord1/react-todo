var React = require('react');
var ToDoList = require('ToDoList');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
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
  render: function() {
    var {todos} = this.state;

    return (
      <div>
        <ToDoList todos={todos}/>
      </div>
    )
  }
});

module.exports = ToDoApp;
