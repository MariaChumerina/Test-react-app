import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Profile from './components/Profile/Profile.jsx';
import Header from './components/Shared/Header.jsx';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
        <div className="App">
          <Header />
          <Switch>
            <Route history={history} path="/" exact component={Main} />
            <Route history={history} path="/login" exact component={LoginForm} />
            <Route history={history} path="/gallery" exact component={Gallery} />
            <Route history={history} path="/profile" exact component={Profile} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
