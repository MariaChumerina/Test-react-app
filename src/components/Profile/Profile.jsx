import React from 'react';
import { Redirect } from 'react-router-dom';
import './Profile.css';
import { sessionSaver } from '../../utils/SessionSaver.js';

export default class Login extends React.Component {
  state = {
    isLogin: true,
  }

  handleClick = () => {
    sessionSaver.logoutUser();
    this.setState({ isLogin: false });
  }

  render() {
    const { isLogin } = this.state;
    return isLogin ? (
      <div className="container margin-top-50">
        <h1>
          Profile
        </h1>
        <button type="button" className="btn btn-width" onClick={this.handleClick}>
          Выйти
        </button>
      </div>
    ) : <Redirect to="/login" />;
  }
}