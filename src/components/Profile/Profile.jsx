import classes from './Profile.module.css';
import Posts from './Posts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <main className={classes.content}>
      <ProfileInfo />
      <Posts post={props.myPosts}
            dispatch={props.dispatch}
            newPostText={props.newPostText} />
    </main>
  )
}

export default Profile;