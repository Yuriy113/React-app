import classes from './Posts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';

const Posts = (props) => {

  let PostsElement = props.post.map(elem => <Post source={elem.source} likes={elem.likes} message={elem.message} />)

  let newPostElement = React.createRef();

  const addPost = () => {
    // props.dispatch({ type: 'ADD-POST' });
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let txt = newPostElement.current.value;
    // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: txt };
    let action = updateNewPostTextActionCreator(txt);
    props.dispatch(action);
  }

  return (
    <div className={classes.posts}>
      <h1>
        My Posts
      </h1>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /> <br />
        <button onClick={addPost}>Add Post</button>
      </div>
      <div>
        {PostsElement}
      </div>
    </div>
  )
}

export default Posts;