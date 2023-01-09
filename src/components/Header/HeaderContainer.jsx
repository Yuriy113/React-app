import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

  

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  email: state.auth.email,
})

export default connect(mapStateToProps, { logout })(HeaderContainer);