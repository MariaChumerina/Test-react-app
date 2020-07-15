import React, { Component } from 'react';
import Switch from 'react-router-dom/es/Switch.js';
import Route from 'react-router-dom/es/Route.js';
import withRouter from 'react-router-dom/es/withRouter.js';
import './App.css';
import Main from './components/Main/Main.jsx';
import Login from './components/Login/Login.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Profile from './components/Profile/Profile.jsx';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
        <div className="App">
          <Switch>
            <Route history={history} path="/" exact component={Main} />
            <Route history={history} path="/login" exact component={Login} />
            <Route history={history} path="/gallery" exact component={Gallery} />
            <Route history={history} path="/profile" exact component={Profile} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
