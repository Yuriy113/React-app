import classes from './Posts.module.css';
import Post from './Post/Post';
import React from 'react';

const Posts = (props) => {

  let PostsElement = props.post.map(elem => <Post source={elem.source} likes={elem.likes} message={elem.message} />)

  let newPostElement = React.createRef();

  const addPost = () => {
    // let txt = newPostElement.current.value;
    props.addPost();
    // props.updatePostText('');
  };

  const onPostChange = () => {
    let txt = newPostElement.current.value;
    props.updatePostText(txt);
    // props.updatePostText('');
  }

  return (
    <div className={classes.posts}>
      <h1>
        My Posts
      </h1>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value = { props.newPostText }/> <br/>
        <button onClick={ addPost }>Add Post</button>
      </div>
      <div>
        {PostsElement}
      </div>
    </div>
  )
}

export default Posts;