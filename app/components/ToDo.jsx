var React = require('react');

var ToDo = React.createClass({
  render: function() {
    var {id, text, completed} = this.props;

    return (
      <div onClick={() => {
        this.props.onCompleted(id);
      }}>
        <input type="checkbox" checked={completed} id={id}/>
        {text}
      </div>
    )
  }
});

module.exports = ToDo;
