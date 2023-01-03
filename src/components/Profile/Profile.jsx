import classes from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  // if (!props.isAuth) return <Navigate to={'/login'} />

  return (
    <main className={classes.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <PostsContainer />
    </main>
  )
}

export default Profile;