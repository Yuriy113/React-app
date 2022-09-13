import classes from './Profile.module.css';
import Posts from './Posts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <main className={classes.content}>
      <ProfileInfo />
      <Posts post={props.myPosts} addPost={props.addPost}/>
    </main>
  )
}

export default Profile;