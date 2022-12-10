import React from 'react';
import {useParams} from 'react-router-dom'
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';

export function withRouter(Children) {
  return(props) => {
    const match = {params: useParams()};
    return <Children {...props} match = {match} /* location = {location} history = {history} *//>
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    // debugger;
    let userId = this.props.match.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);