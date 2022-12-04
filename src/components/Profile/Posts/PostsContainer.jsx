import Posts from './Posts';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';

// const PostsContainer = () => {

//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           let state = store.getState()

//           const addPost = () => {
//             store.dispatch(addPostActionCreator());
//           };

//           const onPostChange = (text) => {
//             let action = updateNewPostTextActionCreator(text);
//             store.dispatch(action);
//           }

//           return <Posts updateNewPostText={onPostChange}
//             addPost={addPost}
//             post={state.profilePage.myPosts}
//             newPostText={state.profilePage.newPostText} />
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    post: state.profilePage.myPosts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;