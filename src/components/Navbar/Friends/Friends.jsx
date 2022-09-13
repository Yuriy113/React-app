import classes from './Friends.module.css';
import Friend from './Friend';

const Friends = (props) => {

  let friendsArray = props.friends.map(friend => <Friend name={friend.name}></Friend>)

  return (
    <div>
      <h3 className={classes.title}>
        Friends:
      </h3>
      <ul className={classes.friendsList}>
        {friendsArray}
      </ul>
    </div>
  )
}

export default Friends;