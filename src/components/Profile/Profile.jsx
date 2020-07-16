import React from 'react';
import { Redirect } from 'react-router-dom';
import './Profile.css';
import { sessionSaver } from '../../utils/SessionSaver.js';

export default class Profile extends React.Component {
  isLogin = sessionSaver.getUserStatus() === 'userLoggedIn';
  state = {
    isLogin: this.isLogin,
  }

  handleClick = () => {
    sessionSaver.logoutUser();
    const isLogin = sessionSaver.getUserStatus() === 'userLoggedIn';
    this.setState({ isLogin });
  }

  render() {
    const { isLogin } = this.state;
    return isLogin
      ? (
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