import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Login extends React.Component {

  render() {

    return (
        <header>
          <div className="container">
            <nav className="menu">
              <ul className="menu-list">
                <li className="menu-group">
                  <Link className="menu-link" to="/">
                    На главную
                  </Link>
                </li>
                <li className="menu-group">
                  <Link className="menu-link" to="/gallery">
                    Новости
                  </Link>
                </li>
                <li className="menu-group">
                  <Link className="menu-link" to="/profile">
                    Профиль
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
    );
  }
}