var React = require('react');
var {connect} = require('react-redux');

import * as actions from 'app/actions/actions';

class BaseComponent extends React.Component {
  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }
}

export class AddToDo extends BaseComponent {
  constructor() {
    super();
    this._bind('handleSubmit');
  }

  handleSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var toDoText = this.refs.toDoText.value;

    if (toDoText.length > 0) {
      this.refs.toDoText.value = '';
      dispatch(actions.startAddToDo(toDoText));
    } else {
      this.refs.toDoText.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form ref="add-todo" onSubmit={this.handleSubmit} className="add-todo-form">
          <input type="text" ref="toDoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add ToDo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddToDo);
