import classes from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <main className={classes.content}>
      <ProfileInfo profile={props.profile}/>
      <PostsContainer />
    </main>
  )
}

export default Profile;