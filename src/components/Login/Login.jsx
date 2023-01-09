import React from "react";
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'
import { Input } from "../common/FormsConrtols/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from '../common/FormsConrtols/FormsControls.module.css'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={'Email'}
          name={'email'}
          component={Input}
          validate={[required]} />
      </div>
      <div>
        <Field
          placeholder={'Password'}
          name={'password'}
          component={Input}
          validate={[required]} />
      </div>
      <div>
        <Field
          component={Input}
          name={'rememberMe'}
          type={'checkbox'}
          validate={[required]} /> remember me
      </div>

      {props.error && <div className={style.formSummaryError}>{props.error}</div>}

      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Navigate to={'/profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);