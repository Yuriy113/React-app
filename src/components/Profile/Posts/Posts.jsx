import classes from './Posts.module.css';
import Post from './Post/Post';
import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsConrtols/FormsControls';

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='newPostText' component={Textarea}
      placeholder={'post message'}
      validate={[required, maxLengthCreator(10)]}
      /> <br />
      <button >Add Post</button>
    </form>
  )
}

const ReduxAddNewPostForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

const Posts = (props) => {

  let PostsElement = props.post.map(elem => <Post source={elem.source} likes={elem.likes} message={elem.message} />)

  let newPostElement = React.createRef();

  const addPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.posts}>
      <h1>
        My Posts
      </h1>
      {/* <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /> <br />
        <button onClick={addPost}>Add Post</button>
      </div> */}
      <ReduxAddNewPostForm onSubmit={addPost} />
      <div>
        {PostsElement}
      </div>
    </div>
  )
}





export default Posts;