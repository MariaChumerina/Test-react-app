import React from 'react';
import { reduxForm } from 'redux-form';
import  { Field } from 'redux-form';
import validate from './validate.js';
import './LoginForm.css';

const renderField = (props) => {
  const { input, type, placeholder, meta } = props;
  return (
      <>
        <input {...input} type={type} placeholder={placeholder} />
        {meta.error &&
        meta.touched &&
        <div className="small-text">
          {meta.error}
        </div>}
      </>
  );
}

class LoginForm extends React.Component {

  render() {
    return (
      <div className="container margin-top-50">
        <form className="form" onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName"><b>Username</b></label>
            <Field type="text" component={renderField} placeholder="Enter Username" name="userName" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password"><b>Password</b></label>
            <Field type="password" component={renderField}  placeholder="Enter Password" name="password" required/>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'Login',
  validate,
})(LoginForm);