import React from 'react';
import {useParams} from 'react-router-dom'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { Navigate } from 'react-router-dom';

export function withRouter(Children) {
  return(props) => {
    const match = {params: useParams()};
    return <Children {...props} match = {match} /* location = {location} history = {history} *//>
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 26972;
    }
    this.props.getUserProfile(userId)
  }

  render() {
    if (!this.props.isAuth) return <Navigate to={'/login'} />

    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);