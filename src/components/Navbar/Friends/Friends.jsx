import classes from './Friends.module.css';
import Friend from './Friend';
import StoreContext from '../../../StoreContext';

// const Friends = (props) => {

//   let friendsArray = props.friends.map(friend => <Friend name={friend.name}></Friend>)

//   return (
//     <div>
//       <h3 className={classes.title}>
//         Friends:
//       </h3>
//       <ul className={classes.friendsList}>
//         {friendsArray}
//       </ul>
//     </div>
//   )
// }


const Friends = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().friendsPage;

          let friendsArray = state.friends.map(friend => <Friend name={friend.name}></Friend>)

          return < div >
            <h3 className={classes.title}>
              Friends:
            </h3>
            <ul className={classes.friendsList}>
              {friendsArray}
            </ul>
          </div >
        }
      }
    </StoreContext.Consumer>
  )
}

export default Friends;