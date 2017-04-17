import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'app/actions/actions';

class BaseComponent extends React.Component {
  _bind(...methods) {
    methods.forEach((method) => this[method] = this[method].bind(this));
  }
}

export class Login extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind('onLogin');
  }

  onLogin() {
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  }

  render() {
    return (
      <div>
        <h1 className="page-title">ToDo App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h1>Login</h1>
              <p>Login with GitHub Account below.</p>
              <button className="button" onClick={this.onLogin}>Login with GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Login);
