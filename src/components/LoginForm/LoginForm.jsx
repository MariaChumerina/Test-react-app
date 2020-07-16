import React from 'react';
import { reduxForm } from 'redux-form';
import  { Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import submit from './submitValidate.js';
import { sessionSaver } from '../../utils/SessionSaver.js';
import './LoginForm.css';

const renderField = (props) => {
  const { input, type, placeholder, meta } = props;

  return (
      <>
        <input {...input} type={type} placeholder={placeholder} />
        {meta.error &&
        <div className="small-text">
          {meta.error}
        </div>}
      </>
  );
}


class LoginForm extends React.Component {

  render() {
    if (sessionSaver.getUserStatus() === 'userLoggedIn') return <Redirect to="/profile" />;
    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className="container margin-top-50">
        <form className="form" onSubmit={handleSubmit(submit)} >
          <div className="form-group">
            <label htmlFor="userName"><b>Username</b></label>
            <Field type="text" component={renderField} placeholder="Enter Username" name="username" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password"><b>Password</b></label>
            <Field type="password" component={renderField} placeholder="Enter Password" name="password" required/>
          </div>
          {error && <div>{error}</div>}
          <button className="btn" type="submit" disabled={submitting}>Login</button>
          <div className="align-middle">
            <button className="btn-link" type="button" disabled={pristine || submitting} onClick={reset}>Clear values</button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'Login',
})(LoginForm);