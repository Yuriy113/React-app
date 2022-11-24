import Posts from './Posts';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';

const PostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState()

          const addPost = () => {
            store.dispatch(addPostActionCreator());
          };

          const onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          }

          return <Posts updateNewPostText={onPostChange}
            addPost={addPost}
            post={state.profilePage.myPosts}
            newPostText={state.profilePage.newPostText} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default PostsContainer;