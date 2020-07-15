import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="container margin-top-50">
      <form className="form">
        <label htmlFor="userName"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="userName" required/>

        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}