import React from "react";
import { Navigate } from 'react-router-dom';
import {connect} from 'react-redux'

let mapStateToPropsForRedidect = (state) => ({
  isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={'/login'} />

      return <Component {...this.props} />
    }
  }


  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedidect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;

}